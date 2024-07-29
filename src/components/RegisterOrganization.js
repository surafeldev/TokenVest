import { useState } from 'react'
import { ethers } from 'ethers'
// Ensure the path to OrganizationRegistry.json is correct
import OrganizationRegistryABI from '../contracts/artifacts/contracts/OrganizationRegistry.sol/OrganizationRegistry.json'

const RegisterOrganization = () => {
  const [name, setName] = useState('')
  const [initialSupply, setInitialSupply] = useState('')
  const [loading, setLoading] = useState(false)

  const registerOrganization = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const registryAddress = '0xYourContractAddressHere' // Replace with your contract address
      const registryContract = new ethers.Contract(registryAddress, OrganizationRegistryABI.abi, signer)

      try {
        setLoading(true)
        const tx = await registryContract.registerOrganization(name, ethers.utils.parseUnits(initialSupply, 18))
        await tx.wait()
        alert('Organization registered successfully')
      } catch (err) {
        console.error(err)
        alert('Failed to register organization: ' + err.message)
      } finally {
        setLoading(false)
      }
    } else {
      alert('Please install MetaMask to use this feature')
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Register Organization</h1>
      <input
        type="text"
        placeholder="Organization Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full border border-gray-300 p-2 mb-4 rounded-md bg-blue-50 text-gray-800 placeholder-gray-600"
      />

      <input
        type="text"
        placeholder="Initial Token Supply"
        value={initialSupply}
        onChange={(e) => setInitialSupply(e.target.value)}
        className="block w-full border border-gray-300 p-2 mb-4 rounded-md bg-blue-50 text-gray-800 placeholder-gray-600"
      />

      <button
        onClick={registerOrganization}
        className={`w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Registering...' : 'Register'}
      </button>
    </div>
  )
}

export default RegisterOrganization
