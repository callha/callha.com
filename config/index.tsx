import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createConfig, createStorage, http } from 'wagmi'
import { coinbaseWallet, injected, walletConnect, } from 'wagmi/connectors'
import {
  mainnet, polygon,arbitrum,optimism,linea,zkSync, sepolia, arbitrumSepolia,zkSyncSepoliaTestnet,polygonZkEvm, base, scroll, manta, mantle, metis,  
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
  chains: [ mainnet, polygon,arbitrum,optimism,linea,zkSync, sepolia, arbitrumSepolia,zkSyncSepoliaTestnet, ],
  transports: {
    [mainnet.id]: http('https://mainnet.infura.io/v3/744e5ebf8f75484988e9768734859a3e'),
    [polygon.id]: http('https://polygon-mainnet.infura.io/v3/744e5ebf8f75484988e9768734859a3e'),
    [arbitrum.id]: http('https://arbitrum-mainnet.infura.io/v3/744e5ebf8f75484988e9768734859a3e'),
    [optimism.id]: http('https://optimism-mainnet.infura.io/v3/744e5ebf8f75484988e9768734859a3e'),
    [linea.id]: http('https://linea-mainnet.infura.io/v3/744e5ebf8f75484988e9768734859a3e'),
    [zkSync.id]: http(),
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/t5-2ylBFnJqh1mRgqVKG94zYsMAHqil8'),
    [arbitrumSepolia.id]: http('https://arb-sepolia.g.alchemy.com/v2/ylgOFZOGmjFGbcDCX-dLMeG7TqoW1_Lv'),
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