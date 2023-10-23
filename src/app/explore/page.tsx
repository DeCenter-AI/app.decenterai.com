'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { PiGoogleLogoBold } from 'react-icons/pi'
import { Web3AuthNoModal } from '@web3auth/no-modal'
import type { IProvider } from '@web3auth/base'
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from '@web3auth/base'
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { useRouter } from 'next/navigation'
import { useUserContext } from '../userContext'
import { create_user } from '@/lib/prismaUtils'
import { generateFromEmail } from "unique-username-generator";
import { AvatarGenerator } from 'random-avatar-generator';

const Page = () => {
  const [view, setView] = useState<boolean>(false)
  const [web3auth, setWeb3auth] = useState<Web3AuthNoModal | null>(null)
  const [provider, setProvider] = useState<IProvider | null>(null)
  const { push } = useRouter()
  const { user, setUser } = useUserContext()
  const [email, setEmail] = useState<string>('');
  const generator = new AvatarGenerator();


  const clientId: string = process.env.NEXT_PUBLIC_AUTH_CID

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3AuthNoModal({
          clientId,
          web3AuthNetwork: 'sapphire_devnet',
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: '0x13881',
            rpcTarget: 'https://rpc-mumbai.maticvigil.com', // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
        })
        // @note: change to mainnet once ready for prod
        const privateKeyProvider = new EthereumPrivateKeyProvider({
          config: {
            chainConfig: {
              chainId: '0x13881',
              rpcTarget: 'https://rpc-mumbai.maticvigil.com',
              displayName: 'Polygon Mumbai',
              blockExplorer: 'https://mumbai.polygonscan.com/',
              ticker: 'MATIC',
              tickerName: 'Matic',
            },
          },
        })

        const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
            whiteLabel: {
              appName: 'DecenterAi',
              logoDark: '/icon.png',
              defaultLanguage: 'en',
              mode: 'dark',
            },
            loginConfig: {
              google: {
                name: 'Google Login',
                verifier: 'decenterai-google-auth',
                typeOfLogin: 'google',
                clientId: process.env.NEXT_PUBLIC_GOOGLE_CID,
              },
            },
          },
          privateKeyProvider,
        })
        web3auth.configureAdapter(openloginAdapter)

        setWeb3auth(web3auth)

        await web3auth.init()
        if (web3auth.provider) {
          setProvider(web3auth.provider)
        }
      } catch (error) {
        console.error(error)
      }
    }

    init()
  }, [])

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setEmail(e.currentTarget.value)
  }

  const login = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet')
      return
    }
    const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
      mfaLevel: 'none', // Pass on the mfa level of your choice: default, optional, mandatory, none
      loginProvider: 'google',
    })
    setProvider(web3authProvider)
  }

  const loginPassswordLess = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (!web3auth) {
        console.log('web3auth not initialized yet')
        return
      }
      const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
        loginProvider: 'email_passwordless',
        extraLoginOptions: {
          login_hint: email, // email to send the OTP to
        },
      })
      setProvider(web3authProvider)
    } catch (error) {
      console.log(error)
    }
  }

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet')
      return
    }
    try {
      const user = await web3auth.getUserInfo()
      return user
    } catch (error) {
      console.log('User not logged in')
      return null
    }
  }

  const logout = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet')
      return
    }
    await web3auth.logout()
    setProvider(null)
  }

  if (web3auth) {
    getUserInfo().then(async (res) => {
      if (res != null) {
        const user_data = {
          email: res.email,
          userName: generateFromEmail(res.email,2),
          name: res.name,
          profileImage: generator.generateRandomAvatar(res.name)
        }
        create_user(user_data);
        setUser(user_data)
        push('/dashboard')
      }
    })
  }

  return (
    <div className="bg-primary_13 h-screen flex flex-col gap-4 ">
      <div className="h-[10%] flex pl-10">
        <div className="w-[20%] lg:w-[10%] relative">
          <Image
            src="/logo.png"
            alt="logo image"
            fill={true}
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      <div className="h-[90%] w-full flex  justify-center items-center">
        <div className="w-[80%] lg:w-[30%] h-[80%] ">
          <div className="h-[10%] ">
            <h1 className="font-logirentBold text-primary_1 text-center font-bold text-4xl">
              {' '}
              Explore
            </h1>
          </div>
          <div className="h-[90%]">
            <form
              className="h-[30%] flex flex-col gap-4 text-primary_1"
              onSubmit={loginPassswordLess}
            >
              <div className="h-[50%] flex flex-col">
                <div className="h-[30%] ">
                  <p className="font-archivo text-primary_1 text-xs">Email address</p>
                </div>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="block h-[90%] focus:outline-none focus:ring-1 ring-primary_7 focus:border-none border border-primary_11 rounded-xl px-6 bg-transparent text-sm font-archivo"
                  required
                  onChange={handleEmailChange}
                />
              </div>
              <div className="h-[50%] w-full">
                <button
                  className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-xs py-3 w-full cursor-pointer rounded-xl"
                  type="submit"
                >
                  Start Exploring
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center h-[10%] relative">
              <div className="text-primary_8 text-md absolute top-0 h-full  flex items-center justify-center bg-primary_13 px-4">
                or
              </div>
              <div className="border border-primary_11 w-full"></div>
            </div>
            <div className="h-[60%] flex flex-col gap-3">
              <button
                className="border flex  items-center justify-center gap-4 border-primary_11 hover:border-primary_7 text-primary_7 font-semibold font-primaryArchivo text-sm w-full h-12 cursor-pointer rounded-xl"
                onClick={login}
              >
                <PiGoogleLogoBold size={20} className="text-primary_7" /> Sign up with
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
