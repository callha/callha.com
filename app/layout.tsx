import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./gui/Header";
import Footer from "./gui/Footer";

import Providers from './providers'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {   
    default: `Callha 酷哈`,
    template: `%s | Callha 酷哈`
  },
 
  description: "CallHa,酷哈网络科技工作室,区块链,Web3,市场营销策划,NFT品牌营销,让数据信息可拥有、可信任、有价值,Dapp开发,网站开发,去中心化应用开发,智能合约开发,酷哈,callha,酷哈web3",
 /*  openGraph: {
    title: `${siteMetadata.title} 覃江扮`,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  }, */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="zh_CN">
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

