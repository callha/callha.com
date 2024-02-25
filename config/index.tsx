import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createConfig, createStorage, http } from 'wagmi'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
import {
  mainnet, sepolia, polygon, polygonZkEvm, arbitrum, optimism, zkSync, linea, base, scroll, manta, mantle, metis, arbitrumSepolia, zkSyncSepoliaTestnet,
} from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'CoinIPFS',
  description: 'CoinIPFS ERC404',
  url: 'https://erc404.coinipfs.com', // origin must match your domain & subdomain
  icons: ['/favicon.ico']
}

// Create wagmiConfig
export const config = createConfig({
  chains: [mainnet, sepolia, polygon, polygonZkEvm, arbitrum, optimism, zkSync, linea, base, scroll, manta, mantle, metis, arbitrumSepolia, zkSyncSepoliaTestnet,],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
    [polygonZkEvm.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
    [zkSync.id]: http(),
    [linea.id]: http(),
    [base.id]: http(),
    [scroll.id]: http(),
    [manta.id]: http(),
    [mantle.id]: http(),
    [metis.id]: http(),
    [arbitrumSepolia.id]: http(),
    [zkSyncSepoliaTestnet.id]: http(),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0]
    })
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
})