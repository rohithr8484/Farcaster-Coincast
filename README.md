# 🪙 CoinCast

CoinCast is a lightweight yet powerful mini app built for Farcaster that lets users view and share their crypto portfolio snapshots seamlessly within the social feed. Designed with simplicity and engagement in mind, CoinCast turns your portfolio data into beautiful, shareable content — making it easy to compare and discuss performance with other users on Farcaster.

With CoinCast, users can:

View their crypto portfolio in a sleek card format.

Track 24h price changes with clear indicators.

Instantly share their performance with others via Farcaster.

Engage with casts through likes, comments, and comparisons.

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

CoinCast uses the **Farcaster Frames API** and a backend to simulate a real-time portfolio experience.

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
