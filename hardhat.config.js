require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.0",
    networks: {
        warden: {
            url: "http://127.0.0.1:26657", // Warden's RPC endpoint
            accounts: [`0x4e94403762Cc71c1E7d3fCADeA331B2C094A9d80`], // Wallet private key
        },
    },
};
