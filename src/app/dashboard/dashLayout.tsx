'use client'
import Image from 'next/image'
import React, {useState} from 'react'

import {redirect, usePathname} from 'next/navigation'
import imageDecenterLogoWhite from '@public/Logo White.png'
import imageDecenterLogoSubtitle from '@public/Logo Texts.png'
import {RxDashboard} from 'react-icons/rx'
import {HiOutlineChip} from 'react-icons/hi'
import {BsDatabase} from 'react-icons/bs'
import {GoBell, GoSearch} from 'react-icons/go'
import Link from 'next/link'
//import { useUserContext } from '@state/userContext'
import notIcon from 'public/notification.png'
import {ModalNotification} from './notifications/components/Notification'
import useUserStore from '@/state/userStore'

export const DashLayout = ({ children }: { children: React.ReactNode }) => {
  //const { user } = useUserContext()
  const { user } = useUserStore()
  const pathname = usePathname()
  const [isNotificationOpen, setNotificationOpen] = useState(false)
  const [showBackdrop, setShowBackdrop] = useState(false)

  const openNotification = () => {
    setNotificationOpen(true)
    setShowBackdrop(true)
  }
 const closeNotification = () => {
    setNotificationOpen(false)
    setShowBackdrop(false)
  }

  const myImageLoader = ({ src }) => {
    return src
  }
  return (
    <div className={`w-screen h-screen flex  bg-primary_12 relative `}>
      {showBackdrop && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={closeNotification}
        />
      )}
      <aside className="w-[10%] border-r border-primary_8  h-screen">
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
          {/* <div className="flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 text-primary_8 hover:bg-primary_11 hover:text-primary_1">
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
          </div> */}
          <Link href="/dashboard/settings">
            <div
              className={`flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 text-primary_8 hover:text-primary_1 ${
                pathname === '/dashboard/settings' ? 'bg-primary_11 text-white' : ''
              }`}
            >
              <div className="flex justify-center ">
                <BsDatabase size={25} />
              </div>
              <p className="text-sm">Settings</p>
            </div>
          </Link>
        </div>
      </aside>

      <main className=" w-[90%] h-screen  ">
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
            <div className="text-primary_8  cursor-pointer">
              <GoBell size={25} onClick={openNotification} />
            </div>
            {/* <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl">
              Connect Wallet
            </button> */}

            {user ? (
              <div className="flex items-center bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl relative">
                <button className="flex flex-row items-center ">
                  <Image
                    src={user?.profileImage}
                    alt="profile pic"
                    loader={myImageLoader}
                    unoptimized
                    width={40}
                    height={40}
                    className="max-w-[100%] max-h-[100%] rounded-full mr-3"
                  />

                  <span className="flex items-center font-semibold font-primaryArchivo">
                    {user.userName.charAt(0).toUpperCase() + user.userName.slice(1)}
                  </span>
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
        <div className="w-full h-[90%] px-10 ">{children}</div>
      </main>
      {isNotificationOpen && (
        <aside
          className={`absolute z-50 right-8 mt-14 rounded-3xl max-w-[450px] shadow-xl bg-primary_11 flex flex-col px-4 py-6  gap-6 max-h-screen  `}
        >
          <div className="flex justify-between items-center ">
            <Image src={notIcon} alt="notification" className="w-[30%]" />
            <Link href="/dashboard/notifications" className="text-sm text-[#C1C1C1]">
              View All
            </Link>
          </div>
          <ModalNotification />
          <button>To the top</button>
        </aside>
      )}
    </div>
  )
}
