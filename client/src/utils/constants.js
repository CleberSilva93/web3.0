import abi from "./Transactions.json";
require("dotenv").config();

export const contractABI = abi.abi;
export const contractAddress =
  process.env.CONTRACT_ADDRESS;
