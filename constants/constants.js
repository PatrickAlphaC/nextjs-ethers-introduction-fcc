import { ethers } from "ethers"

const abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "vrfCoordinatorV2",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "entranceFee",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "gasLane",
                type: "bytes32",
            },
            {
                internalType: "uint64",
                name: "subscriptionId",
                type: "uint64",
            },
            {
                internalType: "uint32",
                name: "callbackGasLimit",
                type: "uint32",
            },
            {
                internalType: "uint256",
                name: "interval",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "have",
                type: "address",
            },
            {
                internalType: "address",
                name: "want",
                type: "address",
            },
        ],
        name: "OnlyCoordinatorCanFulfill",
        type: "error",
    },
    {
        inputs: [],
        name: "Raffle__NotEnoughETHEntered",
        type: "error",
    },
    {
        inputs: [],
        name: "Raffle__NotOpen",
        type: "error",
    },
    {
        inputs: [],
        name: "Raffle__TransferFailed",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "currentBalance",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "numPlayers",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "raffeState",
                type: "uint256",
            },
        ],
        name: "Raffle__UpkeepNotNeeded",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "thing",
                type: "uint256",
            },
        ],
        name: "DebugEvent",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "player",
                type: "address",
            },
        ],
        name: "RaffleEnter",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "requestId",
                type: "uint256",
            },
        ],
        name: "RequestedRaffleWinner",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "winner",
                type: "address",
            },
        ],
        name: "WinnerPicked",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "checkUpkeep",
        outputs: [
            {
                internalType: "bool",
                name: "upkeepNeeded",
                type: "bool",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "enterRaffle",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "getEntranceFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getInterval",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getLatestTimeStamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getNumWords",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "getNumberOfPlayers",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "getPlayer",
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
    {
        inputs: [],
        name: "getRaffleState",
        outputs: [
            {
                internalType: "enum Raffle.RaffleState",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getRecentWinner",
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
    {
        inputs: [],
        name: "getRequestConfirmations",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "performUpkeep",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requestId",
                type: "uint256",
            },
            {
                internalType: "uint256[]",
                name: "randomWords",
                type: "uint256[]",
            },
        ],
        name: "rawFulfillRandomWords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
]

const contractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"

const raffleEntranceFee = ethers.utils.parseEther("0.1")

module.exports = {
    abi,
    contractAddress,
    raffleEntranceFee,
}
