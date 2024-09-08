import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./gui/Header";
import Footer from "./gui/Footer";

import Providers from './providers'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `Callha 酷哈网络科技工作室`,
    template: `%s | Callha 酷哈网络科技工作室`
  },

  description: "CallHa,酷哈网络科技工作室,区块链,Web3,市场营销策划,NFT品牌营销,让数据信息可拥有、可信任、有价值,Dapp开发,网站开发,去中心化应用开发,智能合约开发,酷哈,callha,酷哈web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="zh_CN">
      <head>
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
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

