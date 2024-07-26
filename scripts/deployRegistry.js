async function main() {
    const OrganizationRegistry = await ethers.getContractFactory("OrganizationRegistry");
    const organizationRegistry = await OrganizationRegistry.deploy();
    await organizationRegistry.deployed();
  
    console.log("OrganizationRegistry deployed to:", organizationRegistry.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  