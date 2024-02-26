'use client'
import SendTransaction from "@/app/components/SendTransaction"
import { MintNFT } from "@/app/components/MintNFT"
import ReadContract from "@/app/components/ReadContract"
import Link from "next/link"
import { useAccount } from 'wagmi'
import { config } from "@/config"
export default function page() {
    
    return (
        <div>

            <SendTransaction />
            <MintNFT />

            <div>
                <Link target='_blank' href={`https://www.oklink.com/cn/middle/multi-search#key=`}>account</Link>
            </div>
        </div>
    )
}