const STORAGE_PREFIX = 'cartshare_room_';
const USER_KEY = 'cartshare_current_user';
const ROOM_CODE_KEY = 'cartshare_active_room';
const BROADCAST_CHANNEL_NAME = 'cartshare_broadcast_channel';

let broadcastChannel = null;
try {
  if (typeof BroadcastChannel !== 'undefined') {
    broadcastChannel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
  }
} catch (e) {
  console.warn('BroadcastChannel not supported, falling back to storage events only.', e);
}

const subscribers = new Set();

function notifySubscribers(event) {
  subscribers.forEach(cb => {
    try {
      cb(event);
    } catch (err) {
      console.error('Error in subscriber callback:', err);
    }
  });
}

if (broadcastChannel) {
  broadcastChannel.onmessage = (event) => {
    if (event.data && event.data.type) {
      notifySubscribers(event.data);
    }
  };
}

window.addEventListener('storage', (event) => {
  if (event.key && event.key.startsWith(STORAGE_PREFIX)) {
    const roomCode = event.key.replace(STORAGE_PREFIX, '');
    let roomData = null;
    try {
      roomData = event.newValue ? JSON.parse(event.newValue) : null;
    } catch (e) {
      console.error('Failed to parse storage event payload:', e);
    }
    notifySubscribers({
      type: 'STORAGE_SYNC',
      roomCode,
      roomData,
      source: 'storage-event'
    });
  }
});

export const StorageService = {
  
  subscribe(callback) {
    subscribers.add(callback);
    return () => subscribers.delete(callback);
  },

  broadcast(message) {
    if (broadcastChannel) {
      try {
        broadcastChannel.postMessage(message);
      } catch (e) {
        console.warn('Broadcast postMessage failed:', e);
      }
    }
  },

  getCurrentUser() {
    try {
      const sessionUser = sessionStorage.getItem(USER_KEY);
      if (sessionUser) return JSON.parse(sessionUser);

      const localUser = localStorage.getItem(USER_KEY);
      if (localUser) return JSON.parse(localUser);
    } catch (e) {
      console.error('Error reading current user:', e);
    }
    return null;
  },

  setCurrentUser(user, persistAcrossTabs = false) {
    try {
      sessionStorage.setItem(USER_KEY, JSON.stringify(user));
      if (persistAcrossTabs) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
      }
    } catch (e) {
      console.error('Error saving current user:', e);
    }
  },

  clearCurrentUser() {
    sessionStorage.removeItem(USER_KEY);
    localStorage.removeItem(USER_KEY);
  },

  getActiveRoomCode() {
    return sessionStorage.getItem(ROOM_CODE_KEY) || localStorage.getItem(ROOM_CODE_KEY) || null;
  },

  setActiveRoomCode(roomCode) {
    if (roomCode) {
      sessionStorage.setItem(ROOM_CODE_KEY, roomCode.toUpperCase().trim());
      localStorage.setItem(ROOM_CODE_KEY, roomCode.toUpperCase().trim());
    } else {
      sessionStorage.removeItem(ROOM_CODE_KEY);
      localStorage.removeItem(ROOM_CODE_KEY);
    }
  },

  getRoom(roomCode) {
    if (!roomCode) return null;
    const key = STORAGE_PREFIX + roomCode.toUpperCase().trim();
    try {
      const data = localStorage.getItem(key);
      if (!data) return null;
      return JSON.parse(data);
    } catch (e) {
      console.error(`Error loading room ${roomCode}:`, e);
      return null;
    }
  },

  deleteRoom(roomCode) {
    if (!roomCode) return false;
    const formattedCode = roomCode.toUpperCase().trim();
    const key = STORAGE_PREFIX + formattedCode;
    try {
      localStorage.removeItem(key);

      if (this.getActiveRoomCode() === formattedCode) {
        this.setActiveRoomCode(null);
      }

      this.broadcast({
        type: 'ROOM_DELETED',
        roomCode: formattedCode,
        senderId: this.getCurrentUser()?.id || 'anonymous'
      });
      return true;
    } catch (e) {
      console.error(`Error deleting room ${roomCode}:`, e);
      return false;
    }
  },

  saveRoom(roomCode, roomData, broadcastMessage = null) {
    if (!roomCode || !roomData) return;
    const formattedCode = roomCode.toUpperCase().trim();
    const key = STORAGE_PREFIX + formattedCode;
    try {
      roomData.lastUpdated = Date.now();
      localStorage.setItem(key, JSON.stringify(roomData));

      const msg = broadcastMessage || {
        type: 'ROOM_UPDATED',
        roomCode: formattedCode,
        roomData,
        senderId: this.getCurrentUser()?.id || 'anonymous'
      };
      this.broadcast(msg);
    } catch (e) {
      console.error(`Error saving room ${roomCode}:`, e);
    }
  },

  addActivity(roomCode, activity) {
    const room = this.getRoom(roomCode);
    if (!room) return;
    
    if (!room.activities) room.activities = [];
    
    const activityEntry = {
      id: 'act_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      timestamp: Date.now(),
      ...activity
    };

    room.activities.unshift(activityEntry);
    if (room.activities.length > 50) {
      room.activities = room.activities.slice(0, 50);
    }

    this.saveRoom(roomCode, room, {
      type: 'ACTIVITY_LOGGED',
      roomCode: roomCode.toUpperCase().trim(),
      activity: activityEntry,
      senderId: activity.userId || this.getCurrentUser()?.id
    });

    return activityEntry;
  },

  getAllRooms() {
    const rooms = [];
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(STORAGE_PREFIX)) {
          const roomCode = key.replace(STORAGE_PREFIX, '');
          const data = JSON.parse(localStorage.getItem(key));
          if (data && data.code) {
            rooms.push(data);
          }
        }
      }
    } catch (e) {
      console.error('Error fetching all rooms:', e);
    }
    return rooms;
  }
};
