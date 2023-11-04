'use client'

import { useRouter } from 'next/navigation'
import { DashLayout } from '../../dashLayout'
import { PiCaretLeft, PiPencilSimpleLight } from 'react-icons/pi'
import Image from 'next/image'
import avatars from '@public/avatars'
import { useState } from 'react'
export default function Page() {
  const router = useRouter()
  const [isModalOpen, setIsModalOPen] = useState(false)
  const [showBackdrop, setShowBackdrop] = useState(false)
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
        <div className="w-[80%] sm:w-[70%] md:w-[60%]  border border-primary_8 rounded-xl py-2">
          <div className="flex items-center gap-2">
            <Image src={avatars.avatar} alt="" />
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
      </section>
    </DashLayout>
  )
}
