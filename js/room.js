import { StorageService } from './storage.js';

export const RoomManager = {
  
  generateRoomCode(prefix = 'CART') {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${prefix}-${code}`;
  },

  createRoom({ name, code, threshold = 750.00, user }) {
    let roomCode = code ? code.toUpperCase().trim() : '';
    if (!roomCode) {
      do {
        roomCode = this.generateRoomCode();
      } while (StorageService.getRoom(roomCode));
    }

    const existing = StorageService.getRoom(roomCode);
    if (existing) {
      return this.joinRoom(roomCode, user);
    }

    const newRoom = {
      code: roomCode,
      name: name?.trim() || `Room ${roomCode}`,
      threshold: parseFloat(threshold) || 750.00,
      createdAt: Date.now(),
      lastUpdated: Date.now(),
      creator: {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        color: user.color
      },
      members: [
        {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
          color: user.color,
          joinedAt: Date.now(),
          isOnline: true
        }
      ],
      items: [],
      activities: []
    };

    StorageService.saveRoom(roomCode, newRoom);
    StorageService.setActiveRoomCode(roomCode);

    StorageService.addActivity(roomCode, {
      text: `${user.name} created room "${newRoom.name}"`,
      type: 'room_create',
      userName: user.name,
      userAvatar: user.avatar,
      userColor: user.color,
      userId: user.id
    });

    return newRoom;
  },

  joinRoom(roomCode, user) {
    if (!roomCode || !user) return null;
    const formattedCode = roomCode.toUpperCase().trim();
    const room = StorageService.getRoom(formattedCode);

    if (!room) {
      throw new Error(`Room "${formattedCode}" does not exist. Check the code or create a new room.`);
    }

    const existingMemberIndex = room.members.findIndex(m => m.id === user.id || m.name.toLowerCase() === user.name.toLowerCase());
    
    if (existingMemberIndex >= 0) {
      room.members[existingMemberIndex] = {
        ...room.members[existingMemberIndex],
        avatar: user.avatar,
        color: user.color,
        isOnline: true,
        lastSeen: Date.now()
      };
    } else {
      room.members.push({
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        color: user.color,
        joinedAt: Date.now(),
        isOnline: true
      });

      StorageService.addActivity(formattedCode, {
        text: `${user.name} joined the room!`,
        type: 'member_join',
        userName: user.name,
        userAvatar: user.avatar,
        userColor: user.color,
        userId: user.id
      });
    }

    StorageService.saveRoom(formattedCode, room, {
      type: 'MEMBER_JOINED',
      roomCode: formattedCode,
      roomData: room,
      newMember: user,
      senderId: user.id
    });

    StorageService.setActiveRoomCode(formattedCode);
    return room;
  },

  leaveCurrentRoom(user) {
    const currentCode = StorageService.getActiveRoomCode();
    if (currentCode && user) {
      const room = StorageService.getRoom(currentCode);
      if (room) {
        room.members = room.members.filter(m => m.id !== user.id);
        StorageService.saveRoom(currentCode, room);
        StorageService.addActivity(currentCode, {
          text: `${user.name} left the room`,
          type: 'member_leave',
          userName: user.name,
          userAvatar: user.avatar,
          userColor: user.color,
          userId: user.id
        });
      }
    }
    StorageService.setActiveRoomCode(null);
  },

  deleteRoom(roomCode, user) {
    if (!roomCode) return false;
    return StorageService.deleteRoom(roomCode);
  },

  getInviteLink(roomCode) {
    const base = window.location.origin + window.location.pathname;
    return `${base}?room=${encodeURIComponent(roomCode)}`;
  },

  async copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        console.warn('Navigator clipboard failed, using fallback:', err);
      }
    }

    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      console.error('Fallback clipboard copy failed:', err);
      return false;
    }
  },

  getUrlRoomCode() {
    const params = new URLSearchParams(window.location.search);
    const roomParam = params.get('room');
    if (roomParam) return roomParam.toUpperCase().trim();

    if (window.location.hash && window.location.hash.length > 1) {
      return window.location.hash.substring(1).toUpperCase().trim();
    }
    return null;
  }
};
