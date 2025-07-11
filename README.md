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
## 💹 Folder Structure

coincast-farcaster-mini-app/
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── AddCoinsModal.tsx            # Modal to add new coins to portfolio
│   │   ├── AuthProvider.tsx             # Handles authentication context
│   │   ├── CoinDetailModal.tsx          # Modal showing detailed coin info
│   │   ├── CoinHolding.tsx              # Renders individual holdings
│   │   ├── Header.tsx                   # App header/navigation
│   │   ├── LoadingScreen.tsx           # Full-screen loading indicator
│   │   ├── LoginScreen.tsx             # Wallet login/sign-in UI
│   │   ├── MainApp.tsx                 # Root app layout and structure
│   │   ├── MarketOverview.tsx          # Token market data display
│   │   ├── Portfolio.tsx               # Main portfolio display component
│   │   ├── PortfolioStats.tsx          # 24h stats & change indicators
│   │   ├── SocialFeed.tsx              # Farcaster feed and interactions
│   │   ├── TrendingCoins.tsx           # Highlights trending assets
│   │   └── WalletConnection.tsx        # Wallet connect / SIWE logic
│   ├── App.tsx                      # Top-level component setup
│   ├── index.css                    # Tailwind + global styles
│   ├── main.tsx                     # React/Vite entry point
│   └── vite-env.d.ts                # Type definitions for Vite
├── .gitignore
├── README.md                       # Project documentation
├── eslint.config.js               # ESLint configuration
├── index.html                     # HTML shell for Vite
├── package.json                   # Project metadata & dependencies
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js             # TailwindCSS setup
├── tsconfig.json                  # TypeScript config
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts                 # Vite build & dev server config

---

## 🧩 Tech Stack

- **Farcaster Frames SDK**
- **Next.js** / **React**
- **TailwindCSS** for styling
- **CoinCast Mock API** (can be swapped with live backend)

---

## 💹 Sponsor tech
| Sponsor Technology         | Purpose within CoinCast                       | Alignment with Farcaster Mini Apps Platform  |
| -------------------------- | --------------------------------------------- | -------------------------------------------- |
| Farcaster Frame SDKs       | Core interaction/rendering within social feed | ✅ Essential Mini App Infrastructure          |
| Auth Kit + Wagmi Connector | Ethereum wallet auth and SIWE                 | ✅ Identity Layer for Social + Wallet Connect |
| Mini App Solana            | Solana wallet and SPL token support           | ✅ Multi-chain Readiness                      |
| React Query + Radix        | Efficient state & UI management               | ✅ Lightweight UI within Frame limits         |
| TailwindCSS + Lucide Icons | Beautiful and responsive visual styling       | ✅ Enhanced UX inside Frames                  |
| Vite + TypeScript          | Modern, fast, and typed dev environment       | ✅ Compliant with Farcaster dev expectations  |


---

## 🧪 Demo

To see the mini app in action:

```bash
git clone https://github.com/rohithr8484/Farcaster-Coincast.git
npm install
npm run dev
