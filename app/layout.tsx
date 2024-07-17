import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./gui/Header";
import Footer from "./gui/Footer";

import Providers from './providers'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "酷哈网络科技 CallHa",
  description: "CallHa,酷哈网络科技工作室,区块链,Web3,市场营销策划,NFT品牌营销,让数据信息可拥有、可信任、有价值,Dapp开发,网站开发,去中心化应用开发,智能合约开发,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="zh">
      <head>

      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

