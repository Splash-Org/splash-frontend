import ContractAbiJson from "./indexer/abis/VideoContract.json";
import { ethers } from "ethers";

export default function getContract() {
  const contractAddress = "0x015ADed9d83F070425E4873C180f0cfa5512E111";

  // Creating a new provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Getting the signer
  const signer = provider.getSigner();
  // Creating a new contract factory with the signer, address and ABI
  let contract = new ethers.Contract(
    contractAddress,
    ContractAbiJson.abi,
    signer
  );
  // Returning the contract
  return contract;
}
