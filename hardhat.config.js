require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
// require("@nomicfoundation/hardhat-toolbox");

const { alchemyApiKey, infuraProjectId, mnemonic } = require('./secrets.json');

module.exports = {
  solidity: '0.8.20',

  networks: {
    sepolia: { // Sepolia network configuration (for local testing) 
      url: process.env.INFURA_URL, // Infura URL
      accounts: [process.env.PRIVATE_KEY].filter(key => key !== undefined) // Private key
    },

    hardhat: {
      // Local Hardhat network configuration
      chainId: 1337,
    },

    sepoliaAlchemy: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic }
    },

    sepoliaInfura: {
      url: `https://sepolia.infura.io/v3/${infuraProjectId}`,
      accounts: { mnemonic: mnemonic }
    }
  },

  paths: {
    artifacts: "./src/contracts/artifacts",
    compiler: "./path/to/solc"
  }
};