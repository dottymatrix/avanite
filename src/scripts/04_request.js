const { Contract } = require("ethers");
import * as fs from 'browserify-fs';
const path = require("path");
const { Location } = require("@chainlink/functions-toolkit");
require("@chainlink/env-enc").config();
// require('dotenv').config()

const { signer } = require("../connection.js");
const { abi } = require("../contracts/abi/FunctionsConsumer.json");

const consumerAddress = "0x78fcba4d007c648e1e4a681e371a0549515753f6";
const subscriptionId = "1880";
const encryptedSecretsRef = "0xa266736c6f744964006776657273696f6e1a6577cb6a";

/*
const sendRequest = async () => {
  if (!consumerAddress || !encryptedSecretsRef || !subscriptionId) {
    throw Error("Missing required environment variables.");
  }
  const functionsConsumer = new Contract(consumerAddress, abi, signer);

  const source = fs
    .readFileSync(path.resolve(__dirname, "../source.js"))
    .toString();

  const prompt = "Describe what a blockchain is in 15 words or less";
  const args = [prompt];
  const callbackGasLimit = 300_000;

  console.log("\n Sending the Request....")
  const requestTx = await functionsConsumer.sendRequest(
    source,
    Location.DONHosted,
    encryptedSecretsRef,
    args,
    [], // bytesArgs can be empty
    subscriptionId,
    callbackGasLimit
  );

  const txReceipt = await requestTx.wait(1);
  const requestId = txReceipt.events[2].args.id;
  console.log(
    `\nRequest made.  Request Id is ${requestId}. TxHash is ${requestTx.hash}`
  );
};
*/
// Define the sendRequest function with a prompt parameter
export const sendRequest = async (prompt) => {
  // The rest of the code goes here
};

sendRequest().catch(err => {
  console.log("\nError making the Functions Request : ", err);
});
