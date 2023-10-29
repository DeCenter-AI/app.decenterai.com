import './globals.css'
import { Inter } from 'next/font/google'
import '@rainbow-me/rainbowkit/styles.css'
import { Providers } from './providers'
import { ContextProvider } from './userContext'
import { AppMetaData } from '../../config/app'

const inter = Inter({ subsets: ['latin'] })

export const metadata = AppMetaData

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
