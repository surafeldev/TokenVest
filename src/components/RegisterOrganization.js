import { useState } from 'react'
import { ethers } from 'ethers'
import OrganizationRegistryABI from '../contracts/OrganizationRegistry.json'

const RegisterOrganization = () => {
  const [name, setName] = useState('')
  const [initialSupply, setInitialSupply] = useState('')

  const registerOrganization = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const registryAddress = 'ORGANIZATION_REGISTRY_CONTRACT_ADDRESS'
      const registryContract = new ethers.Contract(registryAddress, OrganizationRegistryABI, signer)
      
      try {
        const tx = await registryContract.registerOrganization(name, ethers.utils.parseUnits(initialSupply, 18))
        await tx.wait()
        alert('Organization registered successfully')
      } catch (err) {
        console.error(err)
        alert('Failed to register organization')
      }
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Register Organization</h1>
      <input
        type="text"
        placeholder="Organization Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        type="text"
        placeholder="Initial Token Supply"
        value={initialSupply}
        onChange={(e) => setInitialSupply(e.target.value)}
        className="border p-2 m-2"
      />
      <button onClick={registerOrganization} className="bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </div>
  )
}

export default RegisterOrganization
