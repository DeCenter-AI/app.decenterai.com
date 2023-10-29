import {CHAIN_NAMESPACES} from '@web3auth/base'
import {Web3AuthNoModalOptions} from '@web3auth/no-modal'
import {Metadata} from "next";
import Favicon from "@public/favicon.ico";
import Favicon16x16 from "@public/favicon-16x16.png";
import Favicon32x32 from "@public/favicon-32x32.png";
import SafariPinnedTab from "@public/meta/safari-pinned-tab.svg";
import AppleTouchIcon from "@public/meta/apple-touch-icon.png";

export const AppName = 'Decenter AI'
const AppDescription = `
DecenterAI: Decentralized Infra for AI Model Training
`.trim()

export const AppMetaData: Metadata = {
  applicationName: AppName,
  authors: [{name: 'Hiro', url: 'https://bit.ly/m/laciferin'}],
  keywords: ['DecenterAI', 'AI Infra'],
  title: AppName,
  description: AppDescription,
  icons: [
    {rel: 'icon', url: Favicon.src},
    {rel: 'icon', sizes: '16x16', url: Favicon16x16.src},
    {rel: 'icon', sizes: '32x32', url: Favicon32x32.src},
    {rel: 'mask-icon', url: SafariPinnedTab.src, color: '#5bbad5'},
    {rel: 'apple-touch-icon', url: AppleTouchIcon.src},
  ],
  manifest: '/meta/site.webmanifest',
  themeColor: '#ffffff',
  other: {
    'msapplication-TileColor': '#da532c',
  },
}

export const WagmiProjectId = 'db1b8a46ffa835bd9a48a89ff540f990'

export const Web3AuthConfig: Web3AuthNoModalOptions = {
  // @note: TODO: change to mainnet once ready for prod
  clientId: process.env.NEXT_PUBLIC_AUTH_CID,
  web3AuthNetwork: 'sapphire_devnet',
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x13881',
    rpcTarget: 'https://rpc-mumbai.maticvigil.com', // This is the public RPC we have added, please pass on your own endpoint while creating an app
  },
}

export const Web3AuthEthPrivateKeyProviderConfig = {
  chainConfig: {
    chainId: '0x13881',
    rpcTarget: 'https://rpc-mumbai.maticvigil.com',
    displayName: 'Polygon Mumbai',
    blockExplorer: 'https://mumbai.polygonscan.com/',
    ticker: 'MATIC',
    tickerName: 'Matic',
  },
}
