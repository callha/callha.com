


import { cookieStorage, createConfig, createStorage, http } from 'wagmi'
import { coinbaseWallet, injected, walletConnect, } from 'wagmi/connectors'
import {
  mainnet, polygon, arbitrum, optimism, linea, zkSync, sepolia, arbitrumSepolia, zkSyncSepoliaTestnet, polygonZkEvm, base, scroll, manta, mantle, metis,
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

export const config = createConfig({
  chains: [mainnet, polygon, arbitrum, optimism, linea, zkSync, sepolia, arbitrumSepolia, zkSyncSepoliaTestnet,],
  transports: {
    [mainnet.id]: http(`https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`),
    [polygon.id]: http(`https://polygon-mainnet.infura.io/v3/${process.env.INFURA_KEY}`),
    [arbitrum.id]: http(`https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_KEY}`),
    [optimism.id]: http(`https://optimism-mainnet.infura.io/v3/${process.env.INFURA_KEY}`),
    [linea.id]: http(`https://linea-mainnet.infura.io/v3/${process.env.INFURA_KEY}`),
    [zkSync.id]: http(),
    [sepolia.id]: http(`${process.env.ETH_SEPOLIA_ALCHEMY}`),
    [arbitrumSepolia.id]: http(`${process.env.ARB_SEPOLIA_ALCHEMY}`),
    [zkSyncSepoliaTestnet.id]: http(),
    /*      [polygonZkEvm.id]: http(),
    [base.id]: http(),
    [scroll.id]: http(),
    [manta.id]: http(),
    [mantle.id]: http(),
    [metis.id]: http(), */
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

