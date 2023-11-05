
"use client";

import { ModalProvider } from '@particle-network/connect-react-ui';
import { WalletEntryPosition } from '@particle-network/auth';
import { Ethereum, EthereumGoerli, EthereumSepolia, Polygon, PolygonMumbai } from '@particle-network/chains';
import { evmWallets } from '@particle-network/connect';


export default function NetworkProvider({ children }: { children: React.ReactNode }) {
    return (<ModalProvider
        options={{
            projectId: `${process.env.NEXT_PUBLIC_PARTICLE_NETWORK_PROJECT_ID}`,
            clientKey: `${process.env.NEXT_PUBLIC_PARTICLE_NETWORK_CLIENT_KEY}`,
            appId: `${process.env.NEXT_PUBLIC_PARTICLE_NETWORK_APP_ID}`,
            chains: [
                EthereumSepolia,
                Polygon,
                PolygonMumbai
            ],
            particleWalletEntry: {    //optional: particle wallet config
                displayWalletEntry: true, //display wallet button when connect particle success.
                defaultWalletEntryPosition: WalletEntryPosition.BR,
                supportChains: [
                    EthereumSepolia,
                    Polygon,
                    PolygonMumbai
                ],
                customStyle: {}, //optional: custom wallet style
            },
            securityAccount: { //optional: particle security account config
                //prompt set payment password. 0: None, 1: Once(default), 2: Always
                promptSettingWhenSign: 1,
                //prompt set master password. 0: None(default), 1: Once, 2: Always
                promptMasterPasswordSettingWhenLogin: 1
            },
            // wallets: evmWallets({
            //   projectId: 'walletconnect projectId', //replace with walletconnect projectId
            //   showQrModal: false
            // }),
        }}
        theme={'auto'}
        language={'en'}   //optional：localize, default en
        walletSort={['Particle Auth', 'Wallet']} //optional：walelt order
        particleAuthSort={[    //optional：display particle auth items and order
            'email',
            'google',

        ]}
    >
        {children}
    </ModalProvider>)
}
