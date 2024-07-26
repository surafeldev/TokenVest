require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {

  solidity: {
    compilers: [
      {
        version: "0.8.20",
      },
      {
        version: "0.8.4",
      }
    ]
  },

  networks: {
    sepoliaAlchemy: {
      url: process.env.ALCHEMY_URL, // Ensure you have ALCHEMY_URL in your .env file
      accounts: [process.env.PRIVATE_KEY]
    },

    sepoliaInfura: {
      url: process.env.INFURA_URL,
      accounts: [process.env.PRIVATE_KEY]
    },

    sofplia: {
      url: process.env.SOFPLIA_URL || 'https://eth-sepolia.g.alchemy.com/', // Ensure you have SOFPLIA_URL in your .env file
      accounts: [process.env.SOFPLIA_PRIVATE_KEY || '0xb5422d4ffb22c44fbd7b61201db78a7e580daf7abd4aecce363bebdb871e2e96'] 
    }
  },

};