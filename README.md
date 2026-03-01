🔍 SolWallet Explorer
A lightweight Solana blockchain wallet explorer that lets you search any wallet address and instantly view its SOL balance, recent transactions, token holdings, and transfers — powered by the Helius API.

✨ Features

🔎 Wallet Lookup — Search any Solana wallet address in real time
💰 SOL Balance — View the current SOL balance of any wallet
📜 Transaction History — Browse recent transactions with slot and signature info
🪙 Token Holdings — See all SPL tokens held by a wallet
💸 Transfers — Track token and SOL transfer activity
⚡ Helius RPC Powered — Fast and reliable Solana data via the Helius API


🛠️ Tech Stack
LayerTechFrontendHTML, CSS, JavaScriptBackendNode.js, ExpressAPIHelius RPC & REST APIStylingCustom dark theme

🚀 Getting Started
Prerequisites

Node.js v18+
A free Helius API Key

Installation
bash# 1. Clone the repository
git clone https://github.com/your-username/solwallet-explorer.git
cd solwallet-explorer

# 2. Install dependencies
npm install

# 3. Set up your environment variables
cp .env.example .env
# Then open .env and add your Helius API key
Environment Variables
Create a .env file in the root directory:
envHELIUS_API_KEY=your_helius_api_key_here

⚠️ Never commit your .env file. It is already listed in .gitignore.

Running the Server
bashnode json.js
The backend will start at http://localhost:5000.
Then open index.html in your browser (or use Live Server in VS Code).

📁 Project Structure
solwallet-explorer/
├── index.html        # Main UI
├── explor.html       # Alternative explorer view
├── json.js           # Express backend server
├── package.json      # Node dependencies
├── .env              # API keys (DO NOT COMMIT)
├── .env.example      # Example env template
└── .gitignore        # Ignores node_modules and .env

🔐 Security Notes

API keys are stored in .env and accessed via process.env — never hardcoded
The backend proxies all Helius API requests to keep your key hidden from the frontend
Always ensure .env is in your .gitignore


📌 Roadmap

 Block explorer section
 NFT holdings view
 Wallet comparison tool
 Live SOL price ticker
 Pagination for transactions


📄 License
This project is open source and available under the MIT License.

🙌 Acknowledgements

Helius — Solana RPC & API provider
Solana — The blockchain powering it all
