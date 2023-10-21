import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '@rainbow-me/rainbowkit/styles.css'
// @ts-ignore
import {Providers} from './providers'
import {ContextProvider} from './userContext'
import Favicon from '@public/favicon.ico'
import SafariPinnedTab from '@public/safari-pinned-tab.svg'
import AppleTouchIcon from '@public/apple-touch-icon.png'
import {AppDescription, AppName, AppSiteManifest} from "@enums/app";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  applicationName: AppName,
    authors: [
        {name: "Hiro", url: "https://bit.ly/m/laciferin"}
    ],
    keywords: [
        "DecenterAI", "AI Infra"
    ],
  title: AppName,
  description: AppDescription,
  icons: [
      { rel: 'icon', url: Favicon.src },
      { rel: 'mask-icon', url: SafariPinnedTab.src  },
      { rel: 'apple-touch-icon', url:  AppleTouchIcon.src },
  ],
  manifest: AppSiteManifest,
    themeColor: "#ffffff",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Providers>{children}</Providers>
        </ContextProvider>
      </body>
    </html>
  )
}
