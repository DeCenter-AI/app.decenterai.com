import './globals.css'
import { Inter } from 'next/font/google'
import { AppMetaData } from '@config/app'
//import {ContextProvider} from '@state/userContext'
import NetworkProvider from './NetworkProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = AppMetaData

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NetworkProvider>
          {/* <ContextProvider>{children}</ContextProvider> */}
          {children}
        </NetworkProvider>
      </body>
    </html>
  )
}
