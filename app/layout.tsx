import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./gui/Header";
import Footer from "./gui/Footer";

import Providers from './providers'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoinIPFS",
  description: "CoinIPFS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
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

