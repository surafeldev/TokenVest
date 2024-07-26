import { useState } from 'react'
import { ethers } from 'ethers'

const ConnectWallet = () => {
  const [walletAddress, setWalletAddress] = useState('')

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      setWalletAddress(accounts[0])
    }
  }

  return (
    <div>
      <button onClick={connectWallet} className="bg-blue-500 text-white px-4 py-2 rounded">
        Connect Wallet
      </button>
      {walletAddress && <p>Connected: {walletAddress}</p>}
    </div>
  )
}

export default ConnectWallet
