# 🪙 CoinCast Farcaster Mini App

A mini app for Farcaster for coins, allowing users to view and share their crypto portfolios seamlessly within the social feed.

---

## 🛠 Features

### 📊 Portfolio Snapshot Display  
Show users their portfolio balance, 24h change, and top holdings directly in Farcaster.

### 🔄 Live Coin Performance Update  
Display dynamic 24h price changes with visual cues (up/down arrows, % gains).

### 📤 Shareable Portfolio Cards  
Easily share portfolio snapshots in casts with formatted images like the CoinCast UI.

### 💬 Farcaster Interaction Hooks  
Enable other users to react, comment, or compare their portfolios from the same mini app.

---

## 🚀 How It Works

This app uses the **Farcaster Frames API** to:

- Authenticate the user via connected wallet or Sign-In with Ethereum.
- Fetch and display the user’s CoinCast portfolio summary (mock API included).
- Provide a call-to-action for sharing on Farcaster ("Share Portfolio").
- Render a clean, stylized preview image as seen in the CoinCast UI.

---

## 🧩 Tech Stack

- **Farcaster Frames SDK**
- **Next.js** / **React**
- **TailwindCSS** for styling
- **CoinCast Mock API** (can be swapped with live backend)

---

## 🧪 Demo (Optional)

To see the mini app in action:

```bash
npm install
npm run dev
