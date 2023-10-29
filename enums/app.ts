import { CHAIN_NAMESPACES } from '@web3auth/base'
import { Web3AuthNoModalOptions } from '@web3auth/no-modal'

export const AppName = 'Decenter AI'
export const AppDescription = `
DecenterAI: Decentralized Infra for AI Model Training
`.trim()

export const AppSiteManifest = '/meta/site.webmanifest'

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
