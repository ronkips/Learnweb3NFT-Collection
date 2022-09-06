const { ethers } = require("hardhat");
const fs = require("fs");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;
  //cryptoDevsContract  is a factory for instances of our CryptoDevs contract.
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");
//deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );
  //print the address of the deployed contract
  console.log("Crypto Devs contract is:", deployedCryptoDevsContract.address)

  const data = {
    WHITELIST_CONTRACT_ADDRESS: deployedCryptoDevsContract.address,
    abi: JSON.parse(deployedCryptoDevsContract.interface.format('json'))
  };
  fs.writeFileSync('./src/CryptoDevs_Abi.json', JSON.stringify(data));
}

// call the main function and catch if there is an error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
