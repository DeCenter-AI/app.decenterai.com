import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import '@rainbow-me/rainbowkit/styles.css'
import {Providers} from './providers'
import {ContextProvider} from "./userContext";
import Favicon from '@public/meta/favicon.ico';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DecenterAI",
  description: "DecenterAI: Decentralized Infra for AI Model Training",
  icons: [{ rel: 'icon', url: Favicon.src }],
    manifest: '/meta/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Providers>{children}</Providers>
        </ContextProvider>
      </body>
    </html>
  );
}
