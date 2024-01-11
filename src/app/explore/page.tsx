'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// import { useUserContext } from '@state/userContext';
import { generateFromEmail } from 'unique-username-generator'
import { AvatarGenerator } from 'random-avatar-generator'
import { GiDigitalTrace } from 'react-icons/gi'
import particle from '@lib/particle'
import Loading from '../components/Loading'
import { userType } from '@app/api/prisma/upsert_user/route'
import { upsert_user } from './upsert_user'
import useUserStore from '@/state/userStore'
import axios from 'axios'
import protectRoutes from './protect_routes'

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { push } = useRouter()
  // const { user, setUser } = useUserContext();
  const [email, setEmail] = useState<string>('')
  const generator = new AvatarGenerator()
  const userStore = useUserStore()

  const login = async () => {
    const userInfo = await particle.auth.login({
      supportAuthTypes: 'email,google',
    })

    await protectRoutes(userInfo);
    console.log({ primsa: userInfo })

    const email = userInfo.email || userInfo.google_email
    const name =
      userInfo.name ||
      (userInfo.thirdparty_user_info ? userInfo.thirdparty_user_info.user_info.name : '')
    const profileImage =
      userInfo.avatar ||
      (userInfo.thirdparty_user_info
        ? userInfo.thirdparty_user_info.user_info.picture
        : '')
    const particleUUID = userInfo.uuid

    if (!userInfo) {
      console.error({ particle: 'user not logged in' })
      return
    }

    setIsLoading(true)

    const user_data: userType = {
      email,
      userName: generateFromEmail(email, 2),
      name,
      profileImage: generator.generateRandomAvatar(profileImage),
      particleUUID,
    }

    const res = await upsert_user(user_data)
    console.log(res)
    userStore.init(res.data.created_user)

    push('/explore/welcome')
  }

  useEffect(() => {
    console.log('checkStatus:particle')

    if (userStore.user) {
      // TODO: memorize the original route the user was intending:
      push('/dashboard')
    }
  }, [])

  return (
    <div className="bg-primary_13 h-screen flex flex-col gap-4 relative">
      {isLoading && <Loading />}
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
      <div className="h-[90%] w-full flex justify-center items-center">
        <div className="w-[80%] lg:w-[30%] h-[80%]">
          <div className="h-[10%]">
            <h1 className="font-logirentBold text-primary_1 text-center font-bold text-4xl">
              {' '}
              Explore
            </h1>
          </div>
          <div className="h-[90%]">
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
