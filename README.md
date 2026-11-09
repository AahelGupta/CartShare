# CartShare — Collaborative Shopping Ecosystem

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap 5.3](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript ES6+](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

> **Final Project Submission:** The "CartShare" Challenge  
> **Candidate Name:** Aahel Gupta  
> **Submission Format:** `BatchID_AahelGupta_CartShare`  
> **Course:** Web Development Internship (Internship Studio)

---

## 1. Problem Statement & Real-World Motivation

In shared living and working environments—such as **student dorms, roommate apartments, startup offices, and travel groups**—coordinating group purchases is notoriously chaotic:

1. **The Communication Gap:** Groups currently rely on fragmented tools (WhatsApp threads, sticky notes, or spreadsheets) to track shopping needs. This leads to missed items, duplicate purchases, and constant backtracking.
2. **The Delivery Threshold Trap:** Grocery and supply delivery platforms often require a minimum total cost (e.g., **\₹750.00**) to unlock free shipping. Reaching this threshold manually is frustrating and prone to calculation mistakes.
3. **Lack of Transparency:** When the package arrives, it is difficult to determine who added which item, making expense splitting tedious and error-prone.

**CartShare** solves these challenges by providing a real-time, browser-native collaborative shopping ecosystem where roommates and teams create rooms, pool orders, track free delivery progress together, and generate audit-ready receipts with automated expense splitting.

---

## 2. Key Features

### 🔑 1. Room Creation & One-Click Joining
- **Unique Room Codes:** Automatically generates readable room codes (e.g. `CART-4921`) or custom codes (e.g. `DORM-4B`).
- **Direct URL Invites:** Shareable links (e.g., `https://.../index.html?room=DORM-4B`) automatically prefill and join the room upon opening.
- **Modern Clipboard API:** One-click "Copy Invite Link" and "Copy Room Code" with native feedback and fallback support.
- **Active Member Presence:** Visual avatar stack showing online participants in the current room.

### 🛒 2. Collaborative Shared Cart
- **Real-Time Additions & Updates:** Any member can add catalog products or custom requests.
- **Contributor Attribution:** Every item in the shared cart features an author tag (e.g., `"Added by Aahel"`, `"Added by Sarah"`) with distinct user color badges.
- **Quantity Adjustments:** Real-time increment (`+`) and decrement (`-`) controls with automatic removal at zero quantity.
- **Custom Item Requests:** Allows roommates to request unlisted specialty items with custom names, estimated prices, categories, and dietary/brand notes.

### 🚚 3. Dynamic Delivery Threshold Tracker
- **Visual Progress Bar:** Real-time animated progress meter displaying current order progress towards the **\₹750.00 Free Delivery Target**.
- **Real-Time Savings:** Automatically waives the standard **\₹49.00** delivery fee and triggers celebratory status when the threshold is reached.
- **Milestone Indicators:** Dynamic checkpoints at \$0, \$25, \$50, and \₹750+.

### ⚡ 4. Real-Time Cross-Tab Collaboration (Zero Backend Needed)
- **Dual-Channel Synchronization:** Uses the modern **`BroadcastChannel` API** for sub-millisecond tab-to-tab messaging and the native **`storage` event listener** as an automated fallback.
- **Multi-User Simulation:** Open Room `CART-XXXX` in Tab 1 as **Aahel** and Tab 2 as **Sarah**. Adding an item in Tab 1 instantly updates Tab 2's cart, progress bar, and logs without refreshing!

### 📊 5. "Who Owes What" Fair Expense Splitting
- **Automated Breakdown:** Automatically calculates each participant's fair share:
  - Personal items subtotal.
  - Proportional share of GST (5%).
  - Fair share of delivery fees (waived if threshold unlocked).
  - Exact net total owed per person.
- **Audit-Ready:** Avoids manual math and makes Venmo, Zelle, or cash settlement instantaneous.

### 🖨️ 6. Audit-Ready Printable Group Receipt
- **Native Browser Print:** Triggers `window.print()` with dedicated CSS `@media print` rules.
- **Paper Optimization:** Hides navigation, filters, activity feeds, buttons, and backgrounds, rendering a clean, professional invoice with:
  - Unique Order Reference Number (`CS-REC-YYYYMMDD-XXXX`).
  - Room Code, Room Name, and Order Host.
  - Complete itemized table with participant attribution.
  - Subtotal, Tax, Delivery Savings, and Grand Total.
  - Individual Contribution Breakdown table.

### 🔔 7. Live Activity Feed & Toast Notifications
- **Chronological Audit Stream:** Displays timestamped room events (e.g., `"Sarah added 2x Organic Apples"`, `"Alex changed Bananas qty to 3"`).
- **Interactive Toasts:** Contextual Bootstrap toasts appear when other participants perform actions.

---

## 3. Technical Foundation & Folder Structure

CartShare is built strictly according to the course syllabus requirements:

```
BatchID_FullName_CartShare/
├── index.html              # Semantic HTML5 single-page application
├── README.md               # Project documentation and setup guide
├── package.json            # Development dependencies and npm scripts
├── vite.config.js          # Vite local development configuration
├── css/
│   └── style.css           # Responsive styling, design tokens, and @media print rules
├── js/
│   ├── bundle.js           # Standalone bundle for zero-setup browser execution
│   ├── app.js              # Application controller, DOM manipulation, and UI bindings
│   ├── cart.js             # Cart business logic, threshold tracker, and expense splitter
│   ├── room.js             # Room management, member presence, and Clipboard API
│   ├── storage.js          # LocalStorage persistence & BroadcastChannel cross-tab sync
│   └── products.js         # Curated catalog of 100 products with Indian Rupee (₹) pricing
└── assets/
    ├── icons/
    │   └── logo.svg        # Scalable vector logo and favicon
    └── images/
        └── placeholder.svg # Fallback vector graphic for offline reliability
```

### Technology Matrix
| Layer | Technology | Usage |
|---|---|---|
| **Structure** | HTML5 | Semantic architecture (`<nav>`, `<main>`, `<section>`, `<aside>`, `<dialog>`) |
| **Styling** | CSS3 & Bootstrap 5.3 | Responsive grid, custom CSS variables, glassmorphism, `@media print` |
| **Interactivity** | Vanilla JavaScript (ES6+) | Modular ES modules, array aggregations, state logic |
| **Persistence** | LocalStorage & SessionStorage | Browser-native state management |
| **Collaboration** | BroadcastChannel & Storage Event | Zero-latency cross-tab synchronization |
| **Typography & Icons** | Plus Jakarta Sans & Bootstrap Icons | Modern typography and micro-icons |

---

## 4. How to Run Locally

CartShare is built on client-side web technologies (HTML5, CSS3, JavaScript, LocalStorage) with zero backend setup:

### Option A: Direct Browser Launch (Easiest)
Simply **double-click `index.html`** in any web browser (Chrome, Edge, Firefox, Safari). It runs immediately with zero installation, zero server, and zero terminal commands.

### Option B: VS Code Live Server
1. Open the `CartShare` folder in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.

### Option C: Using Node / NPM
```bash
npx serve .
# or
npm run dev
```

## 5. How to Test Cross-Tab Real-Time Collaboration

Follow these steps to observe real-time group shopping without needing a backend server:

1. **Step 1:** Open [http://localhost:3000](http://localhost:3000) in your primary browser tab.
2. **Step 2:** In the onboarding modal, choose the name **Aahel** (👨‍💻) and select **"Create New Room"** (or use the default code).
3. **Step 3:** Click the **Room Code Pill** in the top navbar and click **"Copy Invite Link"**.
4. **Step 4:** Open a **second browser tab** (or an Incognito window) and paste the copied link.
5. **Step 5:** In the second tab, enter the name **Sarah** (👩‍🎨) and click **"Enter CartShare Room"**.
6. **Step 6 (The Magic):**
   - In Tab 2, click **"Add to Cart"** on any item.
   - Switch to Tab 1: Notice the cart counter, the item card with `"Added by Sarah"`, the delivery threshold progress bar, and the activity feed update **instantly** without reloading!
   - In Tab 1, adjust quantity or add a custom item: Tab 2 reflects the update immediately.
7. **Step 7:** Click **"View & Print Group Receipt"** or **"Who Owes What"** to review the automated expense breakdown.

---

## 6. Deployment Guide

### Deploying to GitHub Pages
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CartShare collaborative shopping ecosystem"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment**, select **Source:** `Deploy from a branch`, choose branch `main` and folder `/ (root)`, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Deploying to Vercel
1. Run `npx vercel` in the project root, or connect your GitHub repository in the [Vercel Dashboard](https://vercel.com).
2. Root directory: `./`
3. Click **Deploy**.

### Deploying to Netlify
1. Drag and drop the `CartShare` folder into the [Netlify Drop](https://app.netlify.com/drop) zone, or connect the GitHub repository.

---

## 7. Future Enhancements & Architecture

As outlined in the challenge roadmap, future scaling enhancements include:
- **Backend Architecture:** Node.js, Express, and MongoDB for cross-network persistent database storage and JWT user authentication.
- **WebSocket / Firebase Cloud Sync:** Full live syncing across different physical devices over the internet.
- **Integrated Group Payments:** Stripe / Razorpay multi-party split checkout API allowing each participant to authorize their individual share directly.

---

## 8. Author & Submission Information
- **Student Name:** Aahel Gupta
- **Project:** CartShare Collaborative Shopping Ecosystem
- **Folder / Archive Naming:** `BatchID_FullName_CartShare`
- **Submission Date:** November 2026
