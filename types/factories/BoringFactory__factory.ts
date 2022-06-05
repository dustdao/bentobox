/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BoringFactory } from "../BoringFactory";

export class BoringFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BoringFactory> {
    return super.deploy(overrides || {}) as Promise<BoringFactory>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoringFactory {
    return super.attach(address) as BoringFactory;
  }
  connect(signer: Signer): BoringFactory__factory {
    return super.connect(signer) as BoringFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringFactory {
    return new Contract(address, _abi, signerOrProvider) as BoringFactory;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    name: "LogDeploy",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "useCreate2",
        type: "bool",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "masterContractOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103f7806100206000396000f3fe6080604052600436106100295760003560e01c80631f54245b1461002e578063bafe4f1414610057575b600080fd5b61004161003c3660046102a3565b610077565b60405161004e9190610349565b60405180910390f35b34801561006357600080fd5b50610041610072366004610281565b610249565b60006001600160a01b0385166100a85760405162461bcd60e51b815260040161009f9061038c565b60405180910390fd5b606085901b821561011a57600085856040516100c5929190610339565b60405180910390209050604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260148201526e5af43d82803e903d91602b57fd5bf360881b6028820152816037826000f59350505061015f565b604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528160148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09250505b6001600160a01b0382811660008181526020819052604090819020805473ffffffffffffffffffffffffffffffffffffffff1916938a16939093179092559051631377d1f560e21b8152634ddf47d49034906101c1908990899060040161035d565b6000604051808303818588803b1580156101da57600080fd5b505af11580156101ee573d6000803e3d6000fd5b5050505050816001600160a01b0316866001600160a01b03167fd62166f3c2149208e51788b1401cc356bf5da1fc6c7886a32e18570f57d88b3b878760405161023892919061035d565b60405180910390a350949350505050565b6000602081905290815260409020546001600160a01b031681565b80356001600160a01b038116811461027b57600080fd5b92915050565b600060208284031215610292578081fd5b61029c8383610264565b9392505050565b600080600080606085870312156102b8578283fd5b6102c28686610264565b9350602085013567ffffffffffffffff808211156102de578485fd5b818701915087601f8301126102f1578485fd5b8135818111156102ff578586fd5b886020828501011115610310578586fd5b6020830195508094505050506040850135801515811461032e578182fd5b939692955090935050565b6000828483379101908152919050565b6001600160a01b0391909116815260200190565b60006020825282602083015282846040840137818301604090810191909152601f909201601f19160101919050565b6020808252818101527f426f72696e67466163746f72793a204e6f206d6173746572436f6e747261637460408201526060019056fea2646970667358221220b86b31e551e12953b28f4bcde4378877feb05d6c7e8c0cfed14af14fded2170a64736f6c634300060c0033";
