async function main() {
    const OrganizationRegistry = await ethers.getContractFactory("OrganizationRegistry");
    const organizationRegistry = await OrganizationRegistry.deploy();
    await organizationRegistry.deployed();
  
    console.log("OrganizationRegistry deployed to:", organizationRegistry.address);
  
    // You can deploy other contracts here as needed
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  