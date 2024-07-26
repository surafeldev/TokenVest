import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import VestingContractABI from '../contracts/Vesting.json'

const StakeholderPage = () => {
  const [tokens, setTokens] = useState(0)

  useEffect(() => {
    // Fetch the vested tokens for the stakeholder
  }, [])

  const claimTokens = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const vestingContract = new ethers.Contract('VESTING_CONTRACT_ADDRESS', VestingContractABI, signer)
      
      try {
        const tx = await vestingContract.claimTokens()
        await tx.wait()
        alert('Tokens claimed successfully')
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Stakeholder Page</h1>
      <p>You have {tokens} tokens vested.</p>
      <button onClick={claimTokens} className="bg-green-500 text-white px-4 py-2 rounded">
        Claim Tokens
      </button>
    </div>
  )
}

export default StakeholderPage
