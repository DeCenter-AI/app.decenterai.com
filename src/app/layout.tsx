
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@rainbow-me/rainbowkit/styles.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DecenterAI",
  description: "DecenterAI: Decentralized Infra for AI Model Training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Decenter AI</title>
      </head>
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  );
}
