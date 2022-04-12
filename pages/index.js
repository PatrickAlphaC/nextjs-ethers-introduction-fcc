import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { contractAddress, abi, raffleEntranceFee } from "../constants/constants"

export default function Home() {
    const [isConnected, setIsConnected] = useState(false)
    const [hasMetamask, setHasMetamask] = useState(false)
    const [signer, setSigner] = useState(undefined)

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetamask(true)
        }
    })

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            try {
                await ethereum.request({ method: "eth_requestAccounts" })
                setIsConnected(true)
                const provider = new ethers.providers.Web3Provider(window.ethereum)
                setSigner(provider.getSigner())
            } catch (e) {
                console.log(e)
            }
        } else {
            setIsConnected(false)
        }
    }

    async function enterRaffle() {
        if (typeof window.ethereum !== "undefined") {
            const contract = new ethers.Contract(contractAddress, abi, signer)
            try {
                await contract.enterRaffle({ value: raffleEntranceFee })
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("Please install MetaMask")
        }
    }

    return (
        <div>
            {hasMetamask ? (
                isConnected ? (
                    "Connected! "
                ) : (
                    <button onClick={() => connect()}>Connect</button>
                )
            ) : (
                "Please install metamask"
            )}
            {isConnected ? <button onClick={() => enterRaffle()}>Enter Raffle</button> : ""}
        </div>
    )
}
