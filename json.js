import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 5000;
const API_KEY = "885798db-1e3c-41e9-b481-12c784bac708";

app.use(cors());

app.get("/wallet", async(req, res) => {
    const address = req.query.address;
    if (!address) {
        return res.status(400).json({ error: "Wallet address is required" });
    }

    try {
        const response = await fetch(`https://mainnet.helius-rpc.com/?api-key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                jsonrpc: "2.0",
                id: "1",
                method: "getBalance",
                params: [address],
            }),
        });

        const data = await response.json();

        if (data.result) {
            res.json({ balance: data.result.value });
        } else {
            res.status(404).json({ error: "Wallet not found or invalid address." });
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Failed to fetch wallet data" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});