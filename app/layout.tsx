import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./gui/Header";
import Footer from "./gui/Footer";
import Providers from '../config/providers'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { config } from '@/config'
import {ContextProvider} from '@/context'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoinIPFS ERC404",
  description: "Explore various applications of ERC404 as a new token standard,CoinIPFS ERC404,NFT,Token,mimt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
        <Providers>
        <ContextProvider initialState={initialState}>
          <Header />
          {children}
          <Footer />
          </ContextProvider>
        </Providers>
      </body>
    </html>
  );
}
