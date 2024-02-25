'use client'

import React, { ReactNode } from 'react'
import { config, projectId } from '@/config'

import { createWeb3Modal, useWeb3ModalTheme } from '@web3modal/wagmi/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { State, WagmiProvider } from 'wagmi'
import { useTheme } from 'next-themes'
import { mainnet } from 'wagmi/chains'

// Setup queryClient
const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

// Create modal
createWeb3Modal({
  defaultChain: mainnet,
  chainImages: {
    80001: 'https://assets-global.website-files.com/637359c81e22b715cec245ad/63dc31f8817a4a509d7635a7_Logo.svg',
    59144: 'https://linea.build/favicon-32x32.png',
    534352: 'https://scroll.io/favicon_new.ico',
    169: 'https://pacific.manta.network/favicon.ico',
    5000: 'https://www.mantle.xyz/logo-light.svg',

  },
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,//启用分析
  termsConditionsUrl: 'https://www.mytermsandconditions.com',//条款条件
  privacyPolicyUrl: 'https://www.myprivacypolicy.com',//隐私策略
  themeVariables: ({
    //'--w3m-font-family': 'Roboto, sans-serif',//Base 字体系列
    '--w3m-accent': 'var(--w3m-accent-color)',//用于按钮、图标、标签等的颜色
    //'--w3m-color-mix': '#C0E218',//与默认颜色混合的颜色
    //'--w3m-color-mix-strength': 5,//“--w3m-color-mix”应该混合多少的百分比
    //'--w3m-font-size-master': '2px',// 的基本像素大小
    '--w3m-border-radius-master': '2px',//基本边框半径（以像素为单位）
    '--w3m-z-index': 50


  }),
  includeWalletIds: [
    'e7c4d26541a7fd84dbdfa9922d3ad21e936e13a7a0e44385d44f006139e44d3b',
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
    '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
    '8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4',
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
    '20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66',
    '107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c',
    'c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a',
    '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369',
    'f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d',
    'c286eebc742a537cd1d6818363e9dc53b21759a1e8e5d9b263d0c03ec7703576',

  ]
})

export function ContextProvider({
  children,
  initialState
}: {
  children: ReactNode
  initialState?: State
}) {
  const { theme } = useTheme();
  const { themeMode, themeVariables, setThemeMode, setThemeVariables, } = useWeb3ModalTheme()
  setThemeMode(theme === 'dark' ? 'dark' : 'light')
  /*   setThemeVariables({
          '--w3m-accent': '#C0E218',
          '--w3m-color-mix-strength': 40
    }) */
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}