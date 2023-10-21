import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '@rainbow-me/rainbowkit/styles.css'
// @ts-ignore
import {Providers} from './providers'
import {ContextProvider} from './userContext'
import Favicon from '@public/favicon.ico'
import {AppDescription, AppName, AppSiteManifest} from "../../enums/app";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: AppName,
  description: AppDescription,
  icons: [{ rel: 'icon', url: Favicon.src }],
  manifest: AppSiteManifest,
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
