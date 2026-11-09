import { StorageService } from './storage.js';

export const CartManager = {
  
  addItem(roomCode, itemData, user) {
    if (!roomCode || !user) return null;
    const room = StorageService.getRoom(roomCode);
    if (!room) return null;

    if (!room.items) room.items = [];

    const existingIndex = room.items.findIndex(i => 
      (itemData.id && i.productId === itemData.id) || 
      (i.name.toLowerCase() === itemData.name.toLowerCase() && i.price === itemData.price)
    );

    let updatedItem = null;
    const qtyToAdd = parseInt(itemData.qty, 10) || 1;

    if (existingIndex >= 0) {
      
      const existing = room.items[existingIndex];
      existing.qty += qtyToAdd;
      existing.lastModifiedBy = {
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        color: user.color
      };
      existing.lastModifiedAt = Date.now();

      if (!existing.contributors) {
        existing.contributors = [{ ...existing.addedBy, qty: existing.qty - qtyToAdd }];
      }
      existing.contributors.push({
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        color: user.color,
        qty: qtyToAdd,
        addedAt: Date.now()
      });

      updatedItem = existing;
    } else {
      
      updatedItem = {
        id: 'cart_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
        productId: itemData.id || null,
        name: itemData.name,
        category: itemData.category || 'Custom Request',
        price: parseFloat(itemData.price),
        qty: qtyToAdd,
        unit: itemData.unit || 'each',
        image: itemData.image || null,
        notes: itemData.notes || '',
        addedBy: {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
          color: user.color
        },
        addedAt: Date.now()
      };
      room.items.push(updatedItem);
    }

    StorageService.saveRoom(roomCode, room);

    StorageService.addActivity(roomCode, {
      text: `${user.name} added ${qtyToAdd}x "${updatedItem.name}" (₹${(updatedItem.price * qtyToAdd).toFixed(2)})`,
      type: 'item_add',
      userName: user.name,
      userAvatar: user.avatar,
      userColor: user.color,
      userId: user.id,
      item: { name: updatedItem.name, price: updatedItem.price, qty: qtyToAdd }
    });

    return updatedItem;
  },

  updateQuantity(roomCode, itemId, newQty, user) {
    const room = StorageService.getRoom(roomCode);
    if (!room || !room.items) return null;

    const itemIndex = room.items.findIndex(i => i.id === itemId);
    if (itemIndex === -1) return null;

    const item = room.items[itemIndex];
    const qty = parseInt(newQty, 10);

    if (qty <= 0) {
      
      return this.removeItem(roomCode, itemId, user);
    }

    const diff = qty - item.qty;
    item.qty = qty;
    item.lastModifiedBy = {
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      color: user.color
    };
    item.lastModifiedAt = Date.now();

    StorageService.saveRoom(roomCode, room);

    StorageService.addActivity(roomCode, {
      text: `${user.name} changed "${item.name}" qty to ${qty} (${diff > 0 ? '+' : ''}${diff})`,
      type: 'qty_change',
      userName: user.name,
      userAvatar: user.avatar,
      userColor: user.color,
      userId: user.id
    });

    return item;
  },

  removeItem(roomCode, itemId, user) {
    const room = StorageService.getRoom(roomCode);
    if (!room || !room.items) return null;

    const itemIndex = room.items.findIndex(i => i.id === itemId);
    if (itemIndex === -1) return null;

    const [removedItem] = room.items.splice(itemIndex, 1);
    StorageService.saveRoom(roomCode, room);

    StorageService.addActivity(roomCode, {
      text: `${user.name} removed "${removedItem.name}" from cart`,
      type: 'item_remove',
      userName: user.name,
      userAvatar: user.avatar,
      userColor: user.color,
      userId: user.id
    });

    return removedItem;
  },

  clearCart(roomCode, user) {
    const room = StorageService.getRoom(roomCode);
    if (!room) return;

    const count = room.items?.length || 0;
    room.items = [];
    StorageService.saveRoom(roomCode, room);

    StorageService.addActivity(roomCode, {
      text: `${user.name} cleared all ${count} items from the cart`,
      type: 'cart_clear',
      userName: user.name,
      userAvatar: user.avatar,
      userColor: user.color,
      userId: user.id
    });
  },

  calculateSummary(room) {
    const items = room?.items || [];
    const threshold = parseFloat(room?.threshold) || 750.00;

    let subtotal = 0;
    let itemCount = 0;

    items.forEach(item => {
      const q = parseInt(item.qty, 10) || 1;
      const p = parseFloat(item.price) || 0;
      subtotal += p * q;
      itemCount += q;
    });

    subtotal = Math.round(subtotal * 100) / 100;

    const isThresholdReached = subtotal >= threshold;
    const thresholdRemaining = Math.max(0, Math.round((threshold - subtotal) * 100) / 100);
    const progressPercent = Math.min(100, threshold > 0 ? (subtotal / threshold) * 100 : 100);

    const standardDeliveryFee = 49.00;
    const deliveryFee = isThresholdReached ? 0.00 : standardDeliveryFee;
    const deliverySavings = isThresholdReached ? standardDeliveryFee : 0.00;

    const taxRate = 0.05;
    const estimatedTax = Math.round(subtotal * taxRate * 100) / 100;

    const grandTotal = Math.round((subtotal + deliveryFee + estimatedTax) * 100) / 100;

    const splits = this.calculateExpenseSplits(room, subtotal, estimatedTax, deliveryFee);

    return {
      itemCount,
      subtotal,
      threshold,
      thresholdRemaining,
      progressPercent,
      isThresholdReached,
      deliveryFee,
      deliverySavings,
      estimatedTax,
      grandTotal,
      splits
    };
  },

  calculateExpenseSplits(room, totalSubtotal, totalTax, deliveryFee) {
    const items = room?.items || [];
    const members = room?.members || [];

    const memberMap = new Map();

    members.forEach(m => {
      memberMap.set(m.id, {
        id: m.id,
        name: m.name,
        avatar: m.avatar,
        color: m.color,
        itemsSubtotal: 0,
        itemCount: 0,
        items: [],
        taxShare: 0,
        deliveryShare: 0,
        totalOwed: 0,
        paid: false
      });
    });

    items.forEach(item => {
      const ownerId = item.addedBy?.id || 'unknown';
      let entry = memberMap.get(ownerId);

      if (!entry) {
        entry = {
          id: ownerId,
          name: item.addedBy?.name || 'Unknown Participant',
          avatar: item.addedBy?.avatar || '👤',
          color: item.addedBy?.color || '#64748B',
          itemsSubtotal: 0,
          itemCount: 0,
          items: [],
          taxShare: 0,
          deliveryShare: 0,
          totalOwed: 0,
          paid: false
        };
        memberMap.set(ownerId, entry);
      }

      const lineTotal = (item.price || 0) * (item.qty || 1);
      entry.itemsSubtotal += lineTotal;
      entry.itemCount += item.qty || 1;
      entry.items.push({
        name: item.name,
        qty: item.qty,
        price: item.price,
        lineTotal
      });
    });

    const activeParticipants = Array.from(memberMap.values()).filter(m => m.itemsSubtotal > 0);
    const participantCount = activeParticipants.length;

    activeParticipants.forEach(p => {
      p.itemsSubtotal = Math.round(p.itemsSubtotal * 100) / 100;

      if (totalSubtotal > 0) {
        p.taxShare = Math.round((p.itemsSubtotal / totalSubtotal) * totalTax * 100) / 100;
      } else {
        p.taxShare = 0;
      }

      if (deliveryFee > 0 && participantCount > 0) {
        p.deliveryShare = Math.round((deliveryFee / participantCount) * 100) / 100;
      } else {
        p.deliveryShare = 0;
      }

      p.totalOwed = Math.round((p.itemsSubtotal + p.taxShare + p.deliveryShare) * 100) / 100;
    });

    return activeParticipants;
  }
};
