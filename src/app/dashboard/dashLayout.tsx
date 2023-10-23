'use client'
import Image from 'next/image'
import React from 'react'

import { usePathname } from 'next/navigation'
import imageDecenterLogoWhite from '@public/Logo White.png'
import imageDecenterLogoSubtitle from '@public/Logo Texts.png'
import { RxDashboard } from 'react-icons/rx'
import { HiOutlineChip } from 'react-icons/hi'
import { BsDatabase } from 'react-icons/bs'
import { PiClipboardLight, PiTrophyBold, PiUsersThree } from 'react-icons/pi'
import { IoSettingsOutline } from 'react-icons/io5'
import { GoBell, GoSearch } from 'react-icons/go'
import Link from 'next/link'
import { useUserContext } from '../userContext'
import { redirect } from 'next/navigation'

export const DashLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUserContext()
  const pathname = usePathname()

  const myImageLoader = ({ src }) => {
    return src
  }
  return (
    <div className="w-screen h-screen flex  bg-primary_12 relative">
      <aside className="h-full w-[10%] border-r border-primary_8">
        <Link href="/">
          <div className="w-full h-[10%] flex flex-col gap-2 pt-2 items-center justify-center">
            <Image
              src={imageDecenterLogoWhite}
              alt="DECENTER Icon"
              width={50}
              height={150}
              className="max-w-[25%] max-h-[50%]"
            />
            <Image
              src={imageDecenterLogoSubtitle}
              alt="DECENTER Icon"
              width={100}
              height={150}
              style={{ maxWidth: '100%' }}
            />
          </div>
        </Link>
        <div className="w-full h-[90%] overflow-y-auto font-archivo ">
          <Link href="/dashboard">
            <div
              className={`flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 text-primary_8 hover:text-primary_1 ${
                pathname === '/dashboard' ? 'bg-primary_11 text-white' : ''
              }`}
            >
              <div className="flex justify-center ">
                <RxDashboard size={25} />
              </div>
              <p className="text-sm">Dashboard</p>
            </div>
          </Link>
          <Link href="/dashboard/train">
            <div
              className={`flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 text-primary_8 hover:text-primary_1 ${
                pathname === '/dashboard/train' ? 'bg-primary_11 text-white' : ''
              }`}
            >
              <div className="flex justify-center ">
                <HiOutlineChip size={25} />
              </div>
              <p className="text-sm">Train</p>
            </div>
          </Link>
          <Link href="/dashboard/repository">
            <div
              className={`flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 text-primary_8 hover:text-primary_1 ${
                pathname === '/dashboard/repository' ? 'bg-primary_11 text-white' : ''
              }`}
            >
              <div className="flex justify-center ">
                <BsDatabase size={25} />
              </div>
              <p className="text-sm">Repository</p>
            </div>
          </Link>
          <div className="flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 text-primary_8 hover:bg-primary_11 hover:text-primary_1">
            <div className="flex justify-center ">
              <PiUsersThree size={25} />
            </div>
            <p className="text-sm">Teams</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 text-primary_8 hover:bg-primary_11 hover:text-primary_1">
            <div className="flex justify-center ">
              <PiClipboardLight size={25} />
            </div>
            <p className="text-sm">Testing</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 text-primary_8 hover:bg-primary_11 hover:text-primary_1">
            <div className="flex justify-center ">
              <PiTrophyBold size={25} />
            </div>
            <p className="text-sm">Rewards</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 text-primary_8 hover:text-primary_1">
            <div className="flex justify-center ">
              <IoSettingsOutline size={25} />
            </div>
            <p className="text-sm">Settings</p>
          </div>
        </div>
      </aside>

      <main className="h-full w-[90%] ">
        <div className="w-full h-[10%] flex items-center   border-b border-primary_8 px-10">
          <div className="h-full w-[50%] flex items-center">
            <div className="rounded-full h-[60%] max-h-[50px] w-[80%] max-w-[500px]  bg-primary_11 relative text-primary_8 pb-1">
              <div className="absolute top-0 left-5 h-full flex items-center">
                <GoSearch size={20} />
              </div>
              <input
                placeholder="search"
                className="w-full pl-12 h-full rounded-full bg-transparent outline-none focus:ring-0 text-primary_1 text-sm font-archivo"
              />
            </div>
          </div>
          <div className="h-full w-[50%] flex gap-6 items-center justify-end font-archivo ">
            <div className="text-primary_8 ">
              <GoBell size={25} />
            </div>
            <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl">
              Connect Wallet
            </button>

            {user.email ? (
              <div className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl relative">
                <button className="flex flex-row">
                  <Image
                    src={user?.profileImage}
                    alt="profile pic"
                    loader={myImageLoader}
                    width={30}
                    height={30}
                    className="max-w-[100%] max-h-[100%] rounded-full mr-3"
                  />

                  <div className="font-semibold font-primaryArchivo">
                    {user.userName.charAt(0).toUpperCase() + user.userName.slice(1)}
                  </div>
                </button>
              </div>
            ) : (
              <div className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl relative">
                <button className="flex flex-row" onClick={redirect('/explore')}>
                  Log In
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-[90%] px-10">{children}</div>
      </main>
    </div>
  )
}
