const { ethers } = require('ethers');

// Generate a new wallet
const wallet = ethers.Wallet.createRandom();

// Output the address and private key
console.log('Address:', wallet.address);
console.log('Private Key:', wallet.privateKey);
