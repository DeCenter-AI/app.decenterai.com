'use client'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import { PiGoogleLogoBold } from 'react-icons/pi'
import { Web3AuthNoModal } from '@web3auth/no-modal'
import { IProvider } from '@web3auth/base'
import { WALLET_ADAPTERS, CHAIN_NAMESPACES } from '@web3auth/base'
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { redirect, useRouter } from 'next/navigation'
import { useUserContext } from '../userContext'
import { create_user, get_user } from '@/lib/prismaUtils'
import { generateFromEmail } from 'unique-username-generator'
import { AvatarGenerator } from 'random-avatar-generator'
import { AppName } from '@config/app'
import particle from '@/lib/particle'
import { GiDigitalTrace } from "react-icons/gi"

const Page = () => {
  const [view, setView] = useState<boolean>(false)
  const [web3auth, setWeb3auth] = useState<Web3AuthNoModal | null>(null)
  const [provider, setProvider] = useState<IProvider | null>(null)
  const { push } = useRouter()
  const { user, setUser } = useUserContext()
  const [email, setEmail] = useState<string>('')
  const generator = new AvatarGenerator()

  useEffect(() => {
    const init = async () => {
      try {
        console.log(process.env.NEXT_PUBLIC_AUTH_CID, process.env.NEXT_PUBLIC_GOOGLE_CID)
        const web3auth = new Web3AuthNoModal({
          // @note: TODO: change to mainnet once ready for prod
          clientId: process.env.NEXT_PUBLIC_AUTH_CID,
          web3AuthNetwork: 'sapphire_devnet',
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: '0x13881',
            rpcTarget: 'https://rpc-mumbai.maticvigil.com', // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
        })
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

        // TODO: refactor to app.ts

        const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
            whiteLabel: {
              appName: AppName,
              logoDark: '/icon.png', //TODO:@Abhay import it don't use magic urls
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

  const login = async () => {
    const userInfo = await particle.auth.login({
      supportAuthTypes: "email,google",
    })
    const email = userInfo.email || userInfo.google_email
    console.log(userInfo)
    if (userInfo) {
      const res = await get_user(email)
      const user_data = {
        email,
        userName: generateFromEmail(email, 2),
        name: userInfo.thirdparty_user_info.user_info.name,
        profileImage: generator.generateRandomAvatar(userInfo.thirdparty_user_info.user_info.picture),

      }

      if (!res.data.user) {
        await create_user(user_data)
      }
      setUser(user_data)
      push('/dashboard')

    }

  }



  const checkStatus = async () => {
    const info = await particle.auth.getUserInfo()
    const email = info.email || info.google_email
    const res = await get_user(email)
    if (res.data.user) {
      const user_data = {
        email: res.data.user.email,
        userName: res.data.user.userName,
        name: res.data.user.name,
        profileImage: generator.generateRandomAvatar(res.data.user.profileImage),
      }
      setUser(user_data)
      console.log(user_data)
      push('/dashboard')
    }
  }

  useMemo(() => {
    checkStatus()
  }, [])



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
            {/* <form
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
            </div> */}
            <div className="h-[60%] flex flex-col gap-3 pt-10">
              <button
                className="border flex items-center justify-center gap-4 border-primary_11 hover:border-primary_7 text-primary_7 font-semibold font-primaryArchivo text-sm w-full h-12 cursor-pointer rounded-xl"
                onClick={login}
              >
                <GiDigitalTrace size={20} className="text-primary_7" />
                Start here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
