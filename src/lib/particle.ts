import { ParticleNetwork, WalletEntryPosition } from '@particle-network/auth'
import { ParticleProvider } from '@particle-network/provider'
// import { SolanaWallet } from '@particle-network/solana-wallet'
import { Polygon, PolygonMumbai, EthereumSepolia } from '@particle-network/chains'

const particle = new ParticleNetwork({
  projectId: `${process.env.NEXT_PUBLIC_PARTICLE_NETWORK_PROJECT_ID}`,
  clientKey: `${process.env.NEXT_PUBLIC_PARTICLE_NETWORK_CLIENT_KEY}`,
  appId: `${process.env.NEXT_PUBLIC_PARTICLE_NETWORK_APP_ID}`,
  chainName: PolygonMumbai.name, //optional: current chain name, default Ethereum.
  chainId: PolygonMumbai.id, //optional: current chain id, default 1.
  wallet: {
    //optional: by default, the wallet entry is displayed in the bottom right corner of the webpage.
    displayWalletEntry: true, //show wallet entry when connect particle.
    defaultWalletEntryPosition: WalletEntryPosition.BR, //wallet entry position
    uiMode: 'dark', //optional: light or dark, if not set, the default is the same as web auth.
    supportChains: [
      { id: EthereumSepolia.id, name: EthereumSepolia.name },
      { id: Polygon.id, name: Polygon.name },
    ], // optional: web wallet support chains.
    customStyle: {}, //optional: custom wallet style
  },
  securityAccount: {
    //optional: particle security account config
    //prompt set payment password. 0: None, 1: Once(default), 2: Always
    promptSettingWhenSign: 1,
    //prompt set master password. 0: None(default), 1: Once, 2: Always
    promptMasterPasswordSettingWhenLogin: 1,
  },
})

const particleProvider = new ParticleProvider(particle.auth)
//if you need support solana chain
//const solanaWallet = new SolanaWallet(particle.auth)

//if you use web3.js
// window.web3 = new Web3(particleProvider)
// window.web3.currentProvider.isParticleNetwork // => true

//if you use ethers.js
import { ethers } from 'ethers'
const ethersProvider = new ethers.JsonRpcProvider(`${particleProvider}`) // new ethers.Jproviders.Web3Provider(particleProvider, 'any')
const ethersSigner = ethersProvider.getSigner()

export default particle
