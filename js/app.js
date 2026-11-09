import { CATEGORIES, PRODUCTS } from './products.js';
import { StorageService } from './storage.js';
import { RoomManager } from './room.js';
import { CartManager } from './cart.js';

const AVATAR_OPTIONS = [
  { emoji: '👨‍💻', color: '#2563eb' },
  { emoji: '👩‍🎨', color: '#0d9488' },
  { emoji: '🧑‍🔬', color: '#8b5cf6' },
  { emoji: '👩‍🚀', color: '#f59e0b' },
  { emoji: '🧑‍🍳', color: '#ef4444' },
  { emoji: '🏃‍♂️', color: '#10b981' },
  { emoji: '🎧', color: '#ec4899' },
  { emoji: '⚡', color: '#6366f1' }
];

class CartShareApp {
  constructor() {
    this.currentUser = null;
    this.currentRoom = null;
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.selectedAvatar = AVATAR_OPTIONS[0];

    this.modals = {};
  }

  init() {
    this.initModals();
    this.renderAvatarSelectors();
    this.renderCategoryNav();
    this.bindEvents();
    this.checkInitialSession();
    this.setupRealtimeSync();
  }

  initModals() {
    const modalIds = ['userLoginModal', 'roomShareModal', 'customItemModal', 'splitModal', 'receiptModal', 'futureEnhancementsModal'];
    modalIds.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.bootstrap) {
        this.modals[id] = new window.bootstrap.Modal(el);
      }
    });
  }

  switchView(viewName) {
    const loginView = document.getElementById('view-login');
    const appView = document.getElementById('view-app');

    if (viewName === 'login') {
      if (loginView) {
        loginView.classList.remove('d-none');
        loginView.classList.add('d-flex');
      }
      if (appView) {
        appView.classList.remove('d-flex');
        appView.classList.add('d-none');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (loginView) {
        loginView.classList.remove('d-flex');
        loginView.classList.add('d-none');
      }
      if (appView) {
        appView.classList.remove('d-none');
        appView.classList.add('d-flex');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  renderAvatarSelectors() {
    const containers = [
      document.getElementById('pageAvatarSelectorContainer'),
      document.getElementById('avatarSelectorContainer')
    ];

    containers.forEach(container => {
      if (!container) return;

      container.innerHTML = AVATAR_OPTIONS.map((item, index) => `
        <button type="button" class="avatar-radio-btn ${index === 0 ? 'active' : ''}" 
                data-emoji="${item.emoji}" data-color="${item.color}">
          ${item.emoji}
        </button>
      `).join('');

      container.querySelectorAll('.avatar-radio-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          containers.forEach(c => {
            if (c) c.querySelectorAll('.avatar-radio-btn').forEach(b => b.classList.remove('active'));
          });
          const target = e.currentTarget;
          target.classList.add('active');
          this.selectedAvatar = {
            emoji: target.dataset.emoji,
            color: target.dataset.color
          };
        });
      });
    });
  }

  checkInitialSession() {
    const user = StorageService.getCurrentUser();
    let roomCode = RoomManager.getUrlRoomCode() || StorageService.getActiveRoomCode();

    const urlRoom = RoomManager.getUrlRoomCode();
    if (urlRoom) {
      const roomExists = StorageService.getRoom(urlRoom);
      if (roomExists) {
        const pageCodeInput = document.getElementById('pageInputRoomCode');
        if (pageCodeInput) pageCodeInput.value = urlRoom;

        const note = document.getElementById('pageRoomDetectedNote');
        if (note) note.innerHTML = '<span class="badge bg-success-subtle text-success">Invite code ' + urlRoom + ' detected!</span>';
      } else {
        try {
          const cleanUrl = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
        } catch (e) {}
      }
    }

    if (user && roomCode) {
      try {
        const room = StorageService.getRoom(roomCode);
        if (room) {
          this.currentUser = user;
          this.currentRoom = RoomManager.joinRoom(roomCode, user);
          this.switchView('app');
          this.renderAll();
          return;
        } else {
          StorageService.setActiveRoomCode(null);
          try {
            const cleanUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, document.title, cleanUrl);
          } catch (e) {}
          const pageCodeInput = document.getElementById('pageInputRoomCode');
          if (pageCodeInput) pageCodeInput.value = '';
          const note = document.getElementById('pageRoomDetectedNote');
          if (note) note.textContent = 'Enter the room code shared by your group, or click "Create Room" above.';
        }
      } catch (err) {
        console.warn('Could not load stored room:', err);
      }
    }

    this.switchView('login');
  }

  setupRealtimeSync() {
    StorageService.subscribe((event) => {
      if (!this.currentRoom) return;

      const incomingCode = event.roomCode || event.roomData?.code;
      if (incomingCode && incomingCode.toUpperCase() === this.currentRoom.code.toUpperCase()) {
        
        if (event.type === 'ROOM_DELETED') {
          this.currentRoom = null;
          StorageService.setActiveRoomCode(null);
          try {
            const cleanUrl = window.location.origin + window.location.pathname;
            window.history.replaceState({}, document.title, cleanUrl);
          } catch (e) {}
          const pageCodeInput = document.getElementById('pageInputRoomCode');
          if (pageCodeInput) pageCodeInput.value = '';
          const detectedNote = document.getElementById('pageRoomDetectedNote');
          if (detectedNote) detectedNote.textContent = 'Enter the room code shared by your group, or click "Create Room" above.';
          this.switchView('login');
          this.showToast('Room Closed', 'Room ' + incomingCode + ' was permanently deleted by the host.', '🗑️', 'warning');
          return;
        }

        const refreshedRoom = StorageService.getRoom(this.currentRoom.code);
        if (refreshedRoom) {
          this.currentRoom = refreshedRoom;
          this.renderAll();

          if (event.senderId && this.currentUser && event.senderId !== this.currentUser.id) {
            if (event.type === 'ITEM_ADDED' || event.type === 'ACTIVITY_LOGGED') {
              const act = event.activity || refreshedRoom.activities?.[0];
              if (act) {
                this.showToast(act.userName || 'Roommate', act.text, act.userAvatar || '🛒', 'info');
              }
            } else if (event.type === 'MEMBER_JOINED') {
              this.showToast('New Participant', `${event.newMember?.name || 'A roommate'} joined your room!`, '👋', 'success');
            }
          }
        }
      }
    });
  }

  bindEvents() {
    
    const mainLoginForm = document.getElementById('mainLoginForm');
    if (mainLoginForm) {
      mainLoginForm.addEventListener('submit', (e) => this.handleMainLoginFormSubmit(e));
    }

    const modalLoginForm = document.getElementById('userLoginForm');
    if (modalLoginForm) {
      modalLoginForm.addEventListener('submit', (e) => this.handleModalLoginFormSubmit(e));
    }

    document.querySelectorAll('.page-demo-btn, .demo-user-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const nameInput = document.getElementById('pageInputUserName') || document.getElementById('inputUserName');
        if (nameInput) nameInput.value = btn.dataset.name;
        this.selectedAvatar = {
          emoji: btn.dataset.avatar,
          color: btn.dataset.color
        };

        document.querySelectorAll('.avatar-radio-btn').forEach(b => {
          if (b.dataset.emoji === btn.dataset.avatar) {
            b.click();
          }
        });
      });
    });

    const searchInput = document.getElementById('catalogSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderProductGrid();
      });
    }

    const customItemForm = document.getElementById('customItemForm');
    if (customItemForm) {
      customItemForm.addEventListener('submit', (e) => this.handleCustomItemSubmit(e));
    }

    const clearCartBtn = document.getElementById('btnClearCartBtn');
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => {
        if (!this.currentRoom || !this.currentRoom.items?.length) return;
        if (confirm('Are you sure you want to clear all items in the shared cart?')) {
          CartManager.clearCart(this.currentRoom.code, this.currentUser);
          this.refreshCurrentRoom();
          this.showToast('Cart Cleared', 'All items were removed from the shared cart.', '🗑️', 'warning');
        }
      });
    }

    const btnCopyLink = document.getElementById('btnCopyInviteLink');
    if (btnCopyLink) {
      btnCopyLink.addEventListener('click', () => this.handleCopyInviteLink());
    }

    const btnCopyCode = document.getElementById('btnCopyRoomCodeOnly');
    if (btnCopyCode) {
      btnCopyCode.addEventListener('click', () => this.handleCopyRoomCodeOnly());
    }

    const btnPrintReceipt = document.getElementById('btnPrintReceiptBtn');
    if (btnPrintReceipt) {
      btnPrintReceipt.addEventListener('click', () => {
        window.print();
      });
    }

    const navBtnLogout = document.getElementById('navBtnLogout');
    if (navBtnLogout) {
      navBtnLogout.addEventListener('click', () => this.logoutUser());
    }

    const btnSwitchRoom = document.getElementById('btnSwitchRoom');
    if (btnSwitchRoom) {
      btnSwitchRoom.addEventListener('click', () => this.logoutUser());
    }

    const btnDeleteRoomNav = document.getElementById('btnDeleteRoomNav');
    if (btnDeleteRoomNav) {
      btnDeleteRoomNav.addEventListener('click', () => this.handleDeleteCurrentRoom());
    }

    const btnDeleteRoomModal = document.getElementById('btnDeleteRoomModal');
    if (btnDeleteRoomModal) {
      btnDeleteRoomModal.addEventListener('click', () => this.handleDeleteCurrentRoom());
    }

    const receiptModalEl = document.getElementById('receiptModal');
    if (receiptModalEl) {
      receiptModalEl.addEventListener('show.bs.modal', () => this.renderReceipt());
    }

    const splitModalEl = document.getElementById('splitModal');
    if (splitModalEl) {
      splitModalEl.addEventListener('show.bs.modal', () => this.renderExpenseSplits());
    }
  }

  handleMainLoginFormSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById('pageInputUserName');
    const userName = nameInput?.value.trim();
    if (!userName) return;

    const user = {
      id: 'usr_' + userName.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Math.random().toString(36).substr(2, 4),
      name: userName,
      avatar: this.selectedAvatar.emoji,
      color: this.selectedAvatar.color
    };

    StorageService.setCurrentUser(user, true);
    this.currentUser = user;

    const isCreateTab = document.getElementById('pane-login-create')?.classList.contains('active');

    try {
      if (isCreateTab) {
        
        const roomName = document.getElementById('pageInputNewRoomName')?.value.trim();
        const threshold = parseFloat(document.getElementById('pageInputThreshold')?.value) || 750.00;
        
        this.currentRoom = RoomManager.createRoom({
          name: roomName,
          threshold,
          user
        });

        this.showToast('Room Created', `Room "${this.currentRoom.name}" (${this.currentRoom.code}) is ready!`, '🎉', 'success');
      } else {
        const codeInput = document.getElementById('pageInputRoomCode');
        const code = codeInput ? codeInput.value.trim().toUpperCase() : '';

        if (!code) {
          alert('Please enter a room code to join, or select the "Create Room" tab to start a new room.');
          return;
        }

        const existingRoom = StorageService.getRoom(code);
        if (!existingRoom) {
          alert('Room "' + code + '" does not exist or has been deleted. Please check the code or select "Create Room" to start a new room.');
          return;
        }

        this.currentRoom = RoomManager.joinRoom(code, user);
        this.showToast('Room Joined', 'Connected to Room ' + this.currentRoom.code + '!', '👋', 'success');
      }

      const newUrl = `${window.location.origin}${window.location.pathname}?room=${this.currentRoom.code}`;
      window.history.replaceState({ path: newUrl }, '', newUrl);

      this.switchView('app');
      this.renderAll();

    } catch (err) {
      alert(err.message || 'Error entering room');
    }
  }

  handleModalLoginFormSubmit(e) {
    e.preventDefault();
    const nameInput = document.getElementById('inputUserName');
    const userName = nameInput?.value.trim();
    if (!userName) return;

    const user = {
      id: 'usr_' + userName.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Math.random().toString(36).substr(2, 4),
      name: userName,
      avatar: this.selectedAvatar.emoji,
      color: this.selectedAvatar.color
    };

    StorageService.setCurrentUser(user, true);
    this.currentUser = user;

    if (this.modals.userLoginModal) {
      this.modals.userLoginModal.hide();
    }

    this.renderAll();
    this.showToast('Profile Updated', `Welcome back, ${userName}!`, '👤', 'info');
  }

  logoutUser() {
    if (confirm('Log out and return to the login screen?')) {
      if (this.currentUser) {
        RoomManager.leaveCurrentRoom(this.currentUser);
      }
      StorageService.clearCurrentUser();
      StorageService.setActiveRoomCode(null);
      this.currentUser = null;
      this.currentRoom = null;
      try {
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      } catch (e) {}
      const pageCodeInput = document.getElementById('pageInputRoomCode');
      if (pageCodeInput) pageCodeInput.value = '';
      const detectedNote = document.getElementById('pageRoomDetectedNote');
      if (detectedNote) detectedNote.textContent = 'Enter the room code shared by your group, or click "Create Room" above.';
      this.switchView('login');
      this.showToast('Logged Out', 'Returned to the login page.', '👋', 'info');
    }
  }

  handleDeleteCurrentRoom() {
    if (!this.currentRoom) return;

    const code = this.currentRoom.code;
    const name = this.currentRoom.name;

    const confirmed = confirm(
      '⚠️ PERMANENT ACTION:\n\nAre you sure you want to permanently delete room "' + name + '" (' + code + ')?\n\nThis will delete all shared cart items, member records, and history for everyone in this room.'
    );

    if (confirmed) {
      if (this.modals.roomShareModal) {
        this.modals.roomShareModal.hide();
      }

      RoomManager.deleteRoom(code, this.currentUser);
      this.currentRoom = null;
      StorageService.setActiveRoomCode(null);

      try {
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      } catch (e) {}

      const pageCodeInput = document.getElementById('pageInputRoomCode');
      if (pageCodeInput) pageCodeInput.value = '';

      const detectedNote = document.getElementById('pageRoomDetectedNote');
      if (detectedNote) detectedNote.textContent = 'Enter the room code shared by your group, or click "Create Room" above.';

      this.switchView('login');
      this.showToast('Room Deleted', 'Room "' + name + '" (' + code + ') was permanently deleted.', '🗑️', 'warning');
    }
  }

  handleCustomItemSubmit(e) {
    e.preventDefault();
    if (!this.currentRoom || !this.currentUser) return;

    const name = document.getElementById('customItemName').value.trim();
    const price = parseFloat(document.getElementById('customItemPrice').value);
    const qty = parseInt(document.getElementById('customItemQty').value, 10) || 1;
    const category = document.getElementById('customItemCategory').value;
    const notes = document.getElementById('customItemNotes').value.trim();

    if (!name || isNaN(price)) return;

    const updatedItem = CartManager.addItem(this.currentRoom.code, {
      name,
      price,
      qty,
      category,
      unit: 'custom request',
      notes,
      image: null
    }, this.currentUser);

    document.getElementById('customItemForm').reset();
    if (this.modals.customItemModal) {
      this.modals.customItemModal.hide();
    }

    this.currentRoom = StorageService.getRoom(this.currentRoom.code);
    this.renderDeliveryThreshold();
    this.renderCart(updatedItem?.id);
    this.renderProductGrid();
    this.renderActivityFeed();

    this.showToast('Custom Item Added', `"${name}" added to the group cart!`, '🛒', 'success');
  }

  handleAddToCart(prod, btnElement) {
    if (!this.currentRoom || !this.currentUser) {
      this.switchView('login');
      return;
    }

    const updatedItem = CartManager.addItem(this.currentRoom.code, prod, this.currentUser);

    if (btnElement) {
      const originalHtml = btnElement.innerHTML;
      btnElement.classList.add('btn-added-feedback');
      btnElement.innerHTML = '<i class="bi bi-check-lg"></i> <span>Added!</span>';
      setTimeout(() => {
        btnElement.classList.remove('btn-added-feedback');
        btnElement.innerHTML = originalHtml;
      }, 1000);
    }

    this.currentRoom = StorageService.getRoom(this.currentRoom.code);
    this.renderDeliveryThreshold();
    this.renderCart(updatedItem?.id);
    this.renderProductGrid();
    this.renderActivityFeed();

    this.showToast('Cart Updated', `Added "${prod.name}" to the shared cart.`, '🛒', 'success');
  }

  refreshCurrentRoom() {
    if (!this.currentRoom) return;
    this.currentRoom = StorageService.getRoom(this.currentRoom.code);
    this.renderAll();
  }

  renderAll() {
    this.updateNavbarUser();
    this.renderRoomHeaders();
    this.renderDeliveryThreshold();
    this.renderProductGrid();
    this.renderCart();
    this.renderActivityFeed();
  }

  updateNavbarUser() {
    if (!this.currentUser) return;
    const avatarEl = document.getElementById('navUserAvatar');
    const nameEl = document.getElementById('navUserName');
    if (avatarEl) avatarEl.textContent = this.currentUser.avatar || '👤';
    if (nameEl) nameEl.textContent = this.currentUser.name || 'User';
  }

  renderRoomHeaders() {
    if (!this.currentRoom) return;

    const codeLabel = document.getElementById('currentRoomCodeLabel');
    if (codeLabel) codeLabel.textContent = this.currentRoom.code;

    const cartRoomName = document.getElementById('cartRoomNameLabel');
    if (cartRoomName) cartRoomName.textContent = this.currentRoom.name;

    const mobileRoomCode = document.getElementById('mobileOffcanvasRoomCode');
    if (mobileRoomCode) mobileRoomCode.textContent = `Room: ${this.currentRoom.code}`;

    const stackEl = document.getElementById('activeMembersStack');
    if (stackEl) {
      const members = this.currentRoom.members || [];
      stackEl.innerHTML = members.slice(0, 5).map(m => `
        <div class="member-avatar-chip" title="${m.name} (${m.id === this.currentUser?.id ? 'You' : 'Member'})" style="background-color: ${m.color || '#e2e8f0'}20; border-color: ${m.color || '#3b82f6'};">
          ${m.avatar || '👤'}
        </div>
      `).join('') + (members.length > 5 ? `<div class="member-avatar-chip bg-dark text-white small" style="font-size:0.75rem;">+${members.length - 5}</div>` : '');
    }

    const modalCode = document.getElementById('modalRoomCodeDisplay');
    if (modalCode) modalCode.textContent = this.currentRoom.code;

    const modalName = document.getElementById('modalRoomNameDisplay');
    if (modalName) modalName.textContent = this.currentRoom.name;

    const modalLink = document.getElementById('modalInviteLinkInput');
    if (modalLink) modalLink.value = RoomManager.getInviteLink(this.currentRoom.code);

    const modalMembersList = document.getElementById('modalMembersList');
    if (modalMembersList) {
      const members = this.currentRoom.members || [];
      modalMembersList.innerHTML = members.map(m => `
        <div class="list-group-item d-flex align-items-center justify-content-between px-0">
          <div class="d-flex align-items-center gap-2">
            <span class="fs-4">${m.avatar || '👤'}</span>
            <div>
              <div class="fw-bold">${m.name} ${m.id === this.currentUser?.id ? '<span class="badge bg-primary-subtle text-primary ms-1">You</span>' : ''}</div>
              <small class="text-muted">Joined ${new Date(m.joinedAt || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
            </div>
          </div>
          <span class="badge bg-success-subtle text-success border border-success-subtle">Online</span>
        </div>
      `).join('');

      const countBadge = document.getElementById('modalMemberCountBadge');
      if (countBadge) countBadge.textContent = `${members.length} Member${members.length !== 1 ? 's' : ''}`;
    }
  }

  renderCategoryNav() {
    const navWrapper = document.getElementById('categoryNavWrapper');
    if (!navWrapper) return;

    navWrapper.innerHTML = CATEGORIES.map(cat => `
      <button type="button" class="category-pill-btn ${cat.id === this.activeCategory ? 'active' : ''}" data-category="${cat.id}">
        <i class="bi ${cat.icon}"></i>
        <span>${cat.name}</span>
      </button>
    `).join('');

    navWrapper.querySelectorAll('.category-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        navWrapper.querySelectorAll('.category-pill-btn').forEach(b => b.classList.remove('active'));
        const target = e.currentTarget;
        target.classList.add('active');
        this.activeCategory = target.dataset.category;
        this.renderProductGrid();
      });
    });
  }

  renderDeliveryThreshold() {
    if (!this.currentRoom) return;

    const summary = CartManager.calculateSummary(this.currentRoom);
    const container = document.getElementById('thresholdContainer');
    const fillBar = document.getElementById('thresholdFillBar');
    const statusHeadline = document.getElementById('thresholdStatusHeadline');
    const statusMsg = document.getElementById('thresholdStatusMessage');
    const subMsg = document.getElementById('thresholdSubmessage');
    const iconEl = document.getElementById('thresholdStatusIcon');
    const badgeEl = document.getElementById('thresholdBadge');

    if (badgeEl) badgeEl.textContent = `₹${summary.threshold.toFixed(2)} Target`;

    if (fillBar) {
      fillBar.style.width = `${summary.progressPercent}%`;
    }

    if (summary.isThresholdReached) {
      container?.classList.add('unlocked');
      if (iconEl) iconEl.textContent = '🎉';
      if (statusHeadline) statusHeadline.textContent = 'FREE Group Shipping Unlocked!';
      if (statusMsg) {
        statusMsg.className = 'fw-bold text-success';
        statusMsg.textContent = `Target Reached! (₹${summary.subtotal.toFixed(2)} total)`;
      }
      if (subMsg) {
        subMsg.textContent = 'Your team unlocked ₹0.00 delivery (₹49.00 saved)!';
      }
    } else {
      container?.classList.remove('unlocked');
      if (iconEl) iconEl.textContent = '🚚';
      if (statusHeadline) statusHeadline.textContent = 'Group Delivery Threshold Tracker';
      if (statusMsg) {
        statusMsg.className = 'fw-bold text-primary';
        statusMsg.textContent = `Add ₹${summary.thresholdRemaining.toFixed(2)} more for FREE Delivery! (${Math.round(summary.progressPercent)}%)`;
      }
      if (subMsg) {
        subMsg.textContent = `Current cart: ₹${summary.subtotal.toFixed(2)} / ₹${summary.threshold.toFixed(2)} target`;
      }
    }
  }

  renderProductGrid() {
    const grid = document.getElementById('productGridContainer');
    if (!grid) return;

    const cartItems = this.currentRoom?.items || [];

    const filtered = PRODUCTS.filter(prod => {
      const matchCat = this.activeCategory === 'all' || prod.category === this.activeCategory;
      const matchSearch = !this.searchQuery || 
        prod.name.toLowerCase().includes(this.searchQuery) || 
        prod.description.toLowerCase().includes(this.searchQuery) ||
        prod.category.toLowerCase().includes(this.searchQuery);
      return matchCat && matchSearch;
    });

    let html = '';

    filtered.forEach(prod => {
      
      const existingInCart = cartItems.find(i => i.productId === prod.id);
      const cartQty = existingInCart ? existingInCart.qty : 0;

      html += `
        <div class="col">
          <div class="product-card">
            
            
            <div class="product-img-wrapper">
              <img src="${prod.image}" alt="${prod.name}" loading="lazy" onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2394a3b8\' stroke-width=\'1.5\'%3E%3Cpath d=\'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z\'/%3E%3Cline x1=\'3\' y1=\'6\' x2=\'21\' y2=\'6\'/%3E%3Cpath d=\'M16 10a4 4 0 0 1-8 0\'/%3E%3C/svg%3E'">
              ${prod.badge ? `<span class="badge bg-${prod.badgeColor || 'primary'} product-badge-overlay">${prod.badge}</span>` : ''}
              ${cartQty > 0 ? `<span class="product-in-cart-indicator"><i class="bi bi-cart-check-fill me-1"></i>${cartQty} in cart</span>` : ''}
            </div>

            
            <div class="product-body">
              <h6 class="product-title">${prod.name}</h6>
              <div class="product-unit">${prod.unit}</div>
              <p class="product-desc">${prod.description}</p>
              
              <div class="product-footer">
                <div class="product-price">
                  ₹${prod.price.toFixed(2)}
                </div>
                <button type="button" class="btn btn-add-cart btn-add-product" data-product-id="${prod.id}">
                  <i class="bi bi-plus-lg"></i>
                  <span>Add to Cart</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      `;
    });

    html += `
      <div class="col">
        <div class="custom-request-card" data-bs-toggle="modal" data-bs-target="#customItemModal">
          <div class="custom-request-icon">
            <i class="bi bi-plus-lg"></i>
          </div>
          <h6 class="fw-bold text-primary mb-1">Request Custom Item</h6>
          <p class="small text-muted mb-3">Roommate need something not in our catalog? Add any custom item.</p>
          <span class="btn btn-sm btn-outline-primary rounded-pill px-3">Add Custom</span>
        </div>
      </div>
    `;

    grid.innerHTML = html;

    grid.querySelectorAll('.btn-add-product').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodId = e.currentTarget.dataset.productId;
        const prod = PRODUCTS.find(p => p.id === prodId);
        if (prod) {
          this.handleAddToCart(prod, e.currentTarget);
        }
      });
    });
  }

  renderCart(highlightItemId = null) {
    if (!this.currentRoom) return;

    const items = this.currentRoom.items || [];
    const summary = CartManager.calculateSummary(this.currentRoom);

    const desktopList = document.getElementById('cartItemsList');
    const mobileList = document.getElementById('mobileCartItemsList');

    const desktopBadge = document.getElementById('cartItemCountBadge');
    if (desktopBadge) desktopBadge.textContent = `${summary.itemCount} item${summary.itemCount !== 1 ? 's' : ''}`;

    const mobileBadge = document.getElementById('mobileCartBadge');
    if (mobileBadge) mobileBadge.textContent = summary.itemCount;

    const mobileFloatCount = document.getElementById('mobileFloatItemCount');
    if (mobileFloatCount) mobileFloatCount.textContent = summary.itemCount;

    let itemsHtml = '';

    if (items.length === 0) {
      itemsHtml = `
        <div class="text-center py-5 text-muted">
          <div class="fs-1 mb-2">🛒</div>
          <h6 class="fw-bold mb-1">Your Shared Cart is Empty</h6>
          <p class="small px-3">Add products from the catalog or request custom items to start pooling orders!</p>
        </div>
      `;
    } else {
      itemsHtml = items.map(item => {
        const lineTotal = (item.price * item.qty).toFixed(2);
        const author = item.addedBy || { name: 'Roommate', avatar: '👤', color: '#3b82f6' };
        const isSelf = this.currentUser && author.id === this.currentUser.id;
        const isHighlighted = highlightItemId && item.id === highlightItemId;

        return `
          <div class="cart-item-card ${isHighlighted ? 'cart-item-highlight' : ''}" data-item-id="${item.id}">
            <div class="cart-item-top">
              <h6 class="cart-item-title">${item.name}</h6>
              <div class="fw-bold text-dark font-monospace">₹${lineTotal}</div>
            </div>

            
            <div class="d-flex align-items-center justify-content-between">
              <span class="cart-item-author-tag" style="border: 1px solid ${author.color || '#e2e8f0'}40;">
                <span>${author.avatar || '👤'}</span>
                <span>Added by ${isSelf ? 'You' : author.name}</span>
              </span>
              <small class="text-muted">₹${item.price.toFixed(2)} each</small>
            </div>

            ${item.notes ? `<div class="small text-muted fst-italic mb-2 bg-light p-1 rounded">"${item.notes}"</div>` : ''}

            
            <div class="cart-item-controls mt-2">
              <div class="qty-pill-group">
                <button type="button" class="qty-pill-btn btn-cart-dec" data-item-id="${item.id}">-</button>
                <span class="qty-pill-value">${item.qty}</span>
                <button type="button" class="qty-pill-btn btn-cart-inc" data-item-id="${item.id}">+</button>
              </div>

              <button type="button" class="btn btn-sm btn-link text-danger text-decoration-none p-0 btn-cart-remove" data-item-id="${item.id}" title="Remove item">
                <i class="bi bi-trash3 me-1"></i> Remove
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    if (desktopList) desktopList.innerHTML = itemsHtml;
    if (mobileList) mobileList.innerHTML = itemsHtml;

    [desktopList, mobileList].forEach(container => {
      if (!container) return;

      container.querySelectorAll('.btn-cart-inc').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const itemId = e.currentTarget.dataset.itemId;
          const item = items.find(i => i.id === itemId);
          if (item && this.currentRoom && this.currentUser) {
            CartManager.updateQuantity(this.currentRoom.code, itemId, item.qty + 1, this.currentUser);
            this.refreshCurrentRoom();
          }
        });
      });

      container.querySelectorAll('.btn-cart-dec').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const itemId = e.currentTarget.dataset.itemId;
          const item = items.find(i => i.id === itemId);
          if (item && this.currentRoom && this.currentUser) {
            CartManager.updateQuantity(this.currentRoom.code, itemId, item.qty - 1, this.currentUser);
            this.refreshCurrentRoom();
          }
        });
      });

      container.querySelectorAll('.btn-cart-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const itemId = e.currentTarget.dataset.itemId;
          if (this.currentRoom && this.currentUser) {
            CartManager.removeItem(this.currentRoom.code, itemId, this.currentUser);
            this.refreshCurrentRoom();
            this.showToast('Item Removed', 'Removed item from cart.', '🗑️', 'secondary');
          }
        });
      });
    });

    this.updateSummaryValues('summary', summary);
    
    this.updateSummaryValues('mobileSummary', summary);

    const floatTotal = document.getElementById('mobileFloatTotal');
    if (floatTotal) floatTotal.textContent = `₹${summary.grandTotal.toFixed(2)}`;
  }

  updateSummaryValues(prefix, summary) {
    const subtotalEl = document.getElementById(`${prefix}Subtotal`);
    if (subtotalEl) subtotalEl.textContent = `₹${summary.subtotal.toFixed(2)}`;

    const taxEl = document.getElementById(`${prefix}Tax`);
    if (taxEl) taxEl.textContent = `₹${summary.estimatedTax.toFixed(2)}`;

    const delivEl = document.getElementById(`${prefix}DeliveryFee`) || document.getElementById(`${prefix}Delivery`);
    if (delivEl) {
      if (summary.isThresholdReached) {
        delivEl.innerHTML = '<span class="text-success fw-bold">FREE (₹0.00)</span>';
      } else {
        delivEl.textContent = `₹${summary.deliveryFee.toFixed(2)}`;
      }
    }

    const savingsLine = document.getElementById(`${prefix}SavingsLine`);
    if (savingsLine) {
      savingsLine.style.display = summary.isThresholdReached ? 'flex' : 'none';
    }

    const savingsVal = document.getElementById(`${prefix}Savings`);
    if (savingsVal) {
      savingsVal.textContent = `-₹${summary.deliverySavings.toFixed(2)}`;
    }

    const totalEl = document.getElementById(`${prefix}GrandTotal`) || document.getElementById(`${prefix}Total`);
    if (totalEl) totalEl.textContent = `₹${summary.grandTotal.toFixed(2)}`;
  }

  renderActivityFeed() {
    if (!this.currentRoom) return;

    const listEl = document.getElementById('desktopActivityList');
    if (!listEl) return;

    const activities = this.currentRoom.activities || [];

    if (activities.length === 0) {
      listEl.innerHTML = `<div class="text-muted small text-center py-3">No activity recorded yet. Start adding items!</div>`;
      return;
    }

    listEl.innerHTML = activities.slice(0, 15).map(act => {
      const timeStr = new Date(act.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return `
        <div class="activity-item">
          <div class="activity-avatar" style="border: 1px solid ${act.userColor || '#3b82f6'};">
            ${act.userAvatar || '👤'}
          </div>
          <div class="activity-text">
            ${act.text}
          </div>
          <div class="activity-time">${timeStr}</div>
        </div>
      `;
    }).join('');
  }

  renderExpenseSplits() {
    if (!this.currentRoom) return;

    const summary = CartManager.calculateSummary(this.currentRoom);
    const container = document.getElementById('splitBreakdownContainer');
    if (!container) return;

    if (!summary.splits || summary.splits.length === 0) {
      container.innerHTML = `
        <div class="text-center py-4 text-muted">
          <div class="fs-1 mb-2">📊</div>
          <h6>No items in cart to split yet!</h6>
          <p class="small">When members add items to the cart, the automated expense calculator divides taxes proportionally and delivery fees equally.</p>
        </div>
      `;
      return;
    }

    let html = `
      <div class="row g-3 mb-4">
        <div class="col-md-4">
          <div class="p-3 bg-light rounded text-center">
            <small class="text-muted text-uppercase fw-bold">Cart Subtotal</small>
            <div class="fs-4 fw-bold text-dark">₹${summary.subtotal.toFixed(2)}</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 bg-light rounded text-center">
            <small class="text-muted text-uppercase fw-bold">Delivery Status</small>
            <div class="fs-5 fw-bold ${summary.isThresholdReached ? 'text-success' : 'text-primary'}">
              ${summary.isThresholdReached ? 'FREE Delivery 🎉' : `₹${summary.deliveryFee.toFixed(2)} (Split)`}
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 bg-light rounded text-center">
            <small class="text-muted text-uppercase fw-bold">Order Grand Total</small>
            <div class="fs-4 fw-bold text-primary">₹${summary.grandTotal.toFixed(2)}</div>
          </div>
        </div>
      </div>

      <h6 class="fw-bold mb-3">Participant Breakdown</h6>
      <div class="row g-3">
    `;

    summary.splits.forEach(split => {
      const isSelf = this.currentUser && split.id === this.currentUser.id;

      html += `
        <div class="col-12 col-md-6">
          <div class="card h-100 border ${isSelf ? 'border-primary shadow-sm' : ''}">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-2">
                <div class="d-flex align-items-center gap-2">
                  <span class="fs-4">${split.avatar}</span>
                  <div>
                    <h6 class="mb-0 fw-bold">${split.name} ${isSelf ? '<span class="badge bg-primary ms-1">You</span>' : ''}</h6>
                    <small class="text-muted">${split.itemCount} items contributed</small>
                  </div>
                </div>
                <div class="text-end">
                  <span class="badge bg-primary-subtle text-primary fs-6 fw-bold font-monospace">₹${split.totalOwed.toFixed(2)}</span>
                </div>
              </div>

              
              <div class="small border-top pt-2 mt-2">
                <div class="d-flex justify-content-between text-secondary">
                  <span>Items cost:</span>
                  <span>₹${split.itemsSubtotal.toFixed(2)}</span>
                </div>
                <div class="d-flex justify-content-between text-secondary">
                  <span>Proportional tax (8%):</span>
                  <span>₹${split.taxShare.toFixed(2)}</span>
                </div>
                <div class="d-flex justify-content-between text-secondary">
                  <span>Share of delivery fee:</span>
                  <span>₹${split.deliveryShare.toFixed(2)}</span>
                </div>
              </div>

              
              <div class="mt-2 pt-2 border-top">
                <small class="text-muted fw-bold d-block mb-1">Items added:</small>
                <ul class="list-unstyled small mb-0 ps-1 text-muted">
                  ${split.items.map(it => `<li>• ${it.qty}x ${it.name} (₹${it.lineTotal.toFixed(2)})</li>`).join('')}
                </ul>
              </div>

            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;
  }

  renderReceipt() {
    if (!this.currentRoom) return;

    const summary = CartManager.calculateSummary(this.currentRoom);
    const items = this.currentRoom.items || [];

    const orderNumEl = document.getElementById('receiptOrderNumber');
    if (orderNumEl) {
      orderNumEl.textContent = `CS-REC-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${this.currentRoom.code}`;
    }

    const timeEl = document.getElementById('receiptTimestamp');
    if (timeEl) {
      timeEl.textContent = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });
    }

    const roomCodeEl = document.getElementById('receiptRoomCode');
    if (roomCodeEl) roomCodeEl.textContent = this.currentRoom.code;

    const roomNameEl = document.getElementById('receiptRoomName');
    if (roomNameEl) roomNameEl.textContent = this.currentRoom.name;

    const hostEl = document.getElementById('receiptGeneratedBy');
    if (hostEl) hostEl.textContent = this.currentUser?.name || 'Group Host';

    const participantsEl = document.getElementById('receiptParticipants');
    if (participantsEl) {
      const memberNames = (this.currentRoom.members || []).map(m => m.name).join(', ');
      participantsEl.textContent = memberNames || 'Group Members';
    }

    const tbody = document.getElementById('receiptItemTableBody');
    if (tbody) {
      if (items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-muted">No items in the receipt.</td></tr>`;
      } else {
        tbody.innerHTML = items.map(item => `
          <tr>
            <td>
              <div class="fw-semibold text-dark">${item.name}</div>
              <small class="text-muted">${item.category || 'Grocery'} ${item.notes ? `• Note: "${item.notes}"` : ''}</small>
            </td>
            <td>
              <span class="badge bg-light text-dark border">
                ${item.addedBy?.avatar || '👤'} ${item.addedBy?.name || 'Member'}
              </span>
            </td>
            <td class="text-center font-monospace">${item.qty}</td>
            <td class="text-end font-monospace">₹${item.price.toFixed(2)}</td>
            <td class="text-end font-monospace fw-bold">₹${(item.price * item.qty).toFixed(2)}</td>
          </tr>
        `).join('');
      }
    }

    const subtotalEl = document.getElementById('receiptSubtotal');
    if (subtotalEl) subtotalEl.textContent = `₹${summary.subtotal.toFixed(2)}`;

    const taxEl = document.getElementById('receiptTax');
    if (taxEl) taxEl.textContent = `₹${summary.estimatedTax.toFixed(2)}`;

    const delivEl = document.getElementById('receiptDeliveryFee');
    if (delivEl) delivEl.textContent = `₹${summary.deliveryFee.toFixed(2)}`;

    const promoRow = document.getElementById('receiptPromoRow');
    if (promoRow) {
      promoRow.style.display = summary.isThresholdReached ? 'flex' : 'none';
    }

    const discountEl = document.getElementById('receiptDiscount');
    if (discountEl) {
      discountEl.textContent = `-₹${summary.deliverySavings.toFixed(2)}`;
    }

    const totalEl = document.getElementById('receiptGrandTotal');
    if (totalEl) totalEl.textContent = `₹${summary.grandTotal.toFixed(2)}`;

    const splitsTbody = document.getElementById('receiptSplitsTableBody');
    if (splitsTbody) {
      if (!summary.splits || summary.splits.length === 0) {
        splitsTbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted">No contributions.</td></tr>`;
      } else {
        splitsTbody.innerHTML = summary.splits.map(split => `
          <tr>
            <td>
              <span class="me-1">${split.avatar}</span>
              <strong>${split.name}</strong>
            </td>
            <td class="text-center">${split.itemCount}</td>
            <td class="text-end font-monospace">₹${split.itemsSubtotal.toFixed(2)}</td>
            <td class="text-end font-monospace">₹${split.taxShare.toFixed(2)}</td>
            <td class="text-end font-monospace">₹${split.deliveryShare.toFixed(2)}</td>
            <td class="text-end font-monospace fw-bold text-primary">₹${split.totalOwed.toFixed(2)}</td>
          </tr>
        `).join('');
      }
    }
  }

  async handleCopyInviteLink() {
    if (!this.currentRoom) return;
    const link = RoomManager.getInviteLink(this.currentRoom.code);
    const success = await RoomManager.copyToClipboard(link);

    const btn = document.getElementById('btnCopyInviteLink');
    if (btn) {
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check-lg me-1"></i> Copied!';
      btn.classList.replace('btn-primary', 'btn-success');
      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.classList.replace('btn-success', 'btn-primary');
      }, 2000);
    }

    if (success) {
      this.showToast('Invite Link Copied', 'Share this link with roommates to pool shopping orders in real-time!', '📋', 'success');
    }
  }

  async handleCopyRoomCodeOnly() {
    if (!this.currentRoom) return;
    const code = this.currentRoom.code;
    const success = await RoomManager.copyToClipboard(code);

    const btn = document.getElementById('btnCopyRoomCodeOnly');
    if (btn) {
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check-lg me-1"></i> Code Copied!';
      setTimeout(() => {
        btn.innerHTML = originalHtml;
      }, 2000);
    }

    if (success) {
      this.showToast('Room Code Copied', `Room Code "${code}" copied to clipboard!`, '🔑', 'success');
    }
  }

  showToast(title, message, icon = '🛒', type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toastId = 'toast_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4);
    const toastEl = document.createElement('div');
    toastEl.className = 'toast align-items-center shadow-lg border-0';
    toastEl.id = toastId;
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');

    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <span class="fs-4">${icon}</span>
          <div>
            <div class="fw-bold text-${type}">${title}</div>
            <div class="small text-secondary">${message}</div>
          </div>
        </div>
        <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;

    container.appendChild(toastEl);

    if (window.bootstrap && window.bootstrap.Toast) {
      const bsToast = new window.bootstrap.Toast(toastEl, { delay: 3500 });
      bsToast.show();
      toastEl.addEventListener('hidden.bs.toast', () => {
        toastEl.remove();
      });
    } else {
      setTimeout(() => toastEl.remove(), 3500);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.cartShareApp = new CartShareApp();
  window.cartShareApp.init();
});
