# 🪙 CoinCast

CoinCast is a lightweight yet powerful mini app built for Farcaster that lets users view and share their crypto portfolio snapshots seamlessly within the social feed. Designed with simplicity and engagement in mind, CoinCast turns your portfolio data into beautiful, shareable content — making it easy to compare and discuss performance with other users on Farcaster.

With CoinCast, users can:

- View their crypto portfolio in a sleek card format.

- Track 24h price changes with clear indicators.

- Instantly share their performance with others via Farcaster.

- Engage with casts through likes, comments, and comparisons.

<img width="176" height="351" alt="image" src="https://github.com/user-attachments/assets/c8c5db55-6d55-464b-b24b-d1c9cf05fba9" />


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

CoinCast is a Farcaster Mini App that simulates a personalized crypto portfolio experience directly within the Farcaster feed using Frames.

1. 🧾 Authenticate the User
Users connect via Sign-In With Ethereum (SIWE) or a wallet using Farcaster’s auth-kit, allowing CoinCast to identify the user and personalize their experience.

2. 📊 Fetch Portfolio Data
The API returns simulated portfolio data including balance, top holdings, and 24h price changes. The app is structured to easily support live data integrations in the future.

3. 🖼️ Render Portfolio Card
The portfolio is displayed in a stylized, frame-optimized card, showing key metrics and visuals using TailwindCSS and lucide-react. This appears directly inside the Farcaster feed.

4. 📤 Share to Farcaster
Users tap "Share Portfolio" to cast their snapshot. The Frame SDK handles this interaction and updates their cast with the preview image.



---
## 💹 Folder Structure

<img width="686" height="772" alt="image" src="https://github.com/user-attachments/assets/b307d49d-8e02-491b-88cc-1ab00fe72ab2" />

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
