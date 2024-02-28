'use client'
import SendTransaction from "@/app/components/SendTransaction"
//import { MintNFT } from "@/app/components/MintNFT"
//import ReadContract from "@/app/components/ReadContract"
import Link from "next/link"
//import { useAccount } from 'wagmi'
import { config } from "@/config/wagmi"
export default function page() {
    //const account  = useAccount({ config })
    return (
        <div>

            <SendTransaction />

            {/* <ReadContract /> */}
            {/* <MintNFT />

            <div>
                <Link target='_blank' href={`https://www.oklink.com/cn/middle/multi-search#key=${account}`}>account</Link>
            </div> */}
        </div>
    )
}