// scripts/deploy.js
async function main() {
  // We get the contract to deploy
  const DecenscriptToken = await ethers.getContractFactory('DecenscriptToken');
  console.log('Deploying decenscript...');
  const decenscriptToken = await DecenscriptToken.deploy();
  await decenscriptToken.deployed();
  console.log('DecenscriptToken deployed to:', decenscriptToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
