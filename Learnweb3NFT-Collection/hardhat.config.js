require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [GOERLI_PRIVATE_KEY]
    },    
  },
};

//0x6917d491A91A8dfd414c999E56be8897077F7809