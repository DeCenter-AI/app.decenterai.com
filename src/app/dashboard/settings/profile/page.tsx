'use client'

import { useRouter } from 'next/navigation'
import { DashLayout } from '../../dashLayout'
import { PiCaretLeft, PiCpu, PiPencilSimpleLight, PiUsersThree } from 'react-icons/pi'
import { BiMoney } from 'react-icons/bi'
import Image from 'next/image'
import avatars from '@public/avatars'
import { useState } from 'react'
import { profileInfo } from '@/data/profile'
export default function Page() {
  const router = useRouter()
  const [isModalOpen, setIsModalOPen] = useState<boolean>(false)
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false)
  const openModal = () => {
    setIsModalOPen(true)
    setShowBackdrop(true)
  }

  const closeModal = () => {
    setIsModalOPen(false)
    setShowBackdrop(false)
  }
  return (
    <DashLayout>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm "
          onClick={closeModal}
        />
      )}
      <section className="h-full w-full py-4 flex flex-col gap-4">
        <div className="flex gap-4  items-center text-[#8F8F8F] text-sm">
          <button
            type="button"
            onClick={() => router.push('/dashboard/settings/profile')}
            className="flex gap-2 items-center border-none outline-none">
            <PiCaretLeft />
            <span>Back</span>
          </button>
          <p>
            Settings / <span className="text-primary_5">Profile</span>
          </p>
        </div>
        <div className="flex justify-between items-center  rounded-2xl px-4 py-2 border border-primary_8 ">
          <h2 className="font-logirentBold text-2xl uppercase">Profile</h2>
          <button className=" bg-primary_10 rounded-full px-4 py-2 ">
            Delete Account
          </button>
        </div>
        <div className="w-[80%] sm:w-[70%] md:w-[60%]  border border-primary_8 rounded-xl py-3 px-4">
          <div className="flex items-center gap-2">
            <Image src={avatars.avatar} alt=""  className='w-[20%]'/>
            <div>
              <h3 className="text-primary_5">David Ayegoro</h3>
              <p className="text-primary_7">Dayegoro@gmail.com</p>
            </div>
            <button
              className="flex items-center justify-center p-2 bg-primary_7 text-primary_6 rounded-full"
              onClick={openModal}>
              <PiPencilSimpleLight size={25} />
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 w-[80%] sm:w-[70%] md:w-[60%] gap-8">
          {profileInfo.map((item) => (
            <div
              key={item.id}
              className="border border-primary_8 rounded-xl py-2 w-full flex flex-col gap-6 px-4">
              <p>{item.text}</p>
              <div className="flex justify-between items-center">
                <h4 className="text-lg">{item.count}</h4>
                <div>
                  {item.id === 1 ? (
                    <BiMoney size={25} />
                  ) : item.id === 2 ? (
                    <PiUsersThree size={25} />
                  ) : (
                    <PiCpu size={25} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </DashLayout>
  )
}
