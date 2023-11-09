'use client'
import useUserStore from '@/state/userStore'
import { useRouter } from 'next/navigation'
import { DashLayout } from '../../dashLayout'
import { PiCaretLeft, PiCpu, PiPencilSimpleLight, PiUsersThree } from 'react-icons/pi'
import { AiOutlineDownload, AiOutlineHeart } from 'react-icons/ai'
import { BiMoney } from 'react-icons/bi'
import Image from 'next/image'
import avatars from '@public/avatars'
import { useState } from 'react'
import { models, profileInfo } from '@/data/profile'
import box from 'public/model-box.png'
import Link from 'next/link'
import EditProfile from './components/EditProfile'
import profile from 'public/profile-1.png'
export default function Page() {
  const { user } = useUserStore()
  
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
    if (!user) {
      return <div>User Not found</div>
    }
  return (
    <DashLayout>
      {isModalOpen && <EditProfile onclick={closeModal} />}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 backdrop-blur-sm"
          onClick={closeModal}
        />
      )}
      <section className="h-full w-full py-4 flex flex-col gap-4 font-archivo">
        <div className="flex gap-4  items-center text-[#8F8F8F] text-sm">
          <Link
            href="/dashboard/settings"
            className="flex gap-2 items-center border-none outline-none"
          >
            <PiCaretLeft />
            <span>Back</span>
          </Link>
          <p>
            Settings / <span className="text-primary_5">Profile</span>
          </p>
        </div>
        <div className="flex justify-between items-center  rounded-2xl px-4 py-2 border border-primary_8 ">
          <Image src={profile} alt="profile icon" />
          <button className=" bg-primary_10 rounded-full px-4 py-2 ">
            Delete Account
          </button>
        </div>

        <div className=" border border-primary_8 rounded-xl py-3 px-4 flex gap-6 lg:w-[80%] items-center">
          <div className="flex items-center gap-2">
            <Image src={user.profileImage} alt="" width={30} height={30} />
            <div>
              <h3 className="text-primary_5 text-xl">{user.name}</h3>
              <p className="text-primary_7">{user.email}</p>
            </div>
          </div>
          <button
            className="flex items-center justify-center p-2 bg-primary_7 text-primary_6 rounded-full"
            onClick={openModal}
          >
            <PiPencilSimpleLight size={20} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8 lg:w-[80%]">
          {profileInfo.map((item) => (
            <div
              key={item.id}
              className="border border-primary_8 rounded-xl py-2 w-full flex flex-col gap-4 px-4"
            >
              <p className="text-[#C1C1C1]">{item.text}</p>
              <div className="flex justify-between items-center">
                <h4 className="text-lg">{item.count}</h4>
                <div className="text-[#5D5D5D]">
                  {item.id === 1 ? (
                    <BiMoney size={30} />
                  ) : item.id === 2 ? (
                    <PiUsersThree size={30} />
                  ) : (
                    <PiCpu size={30} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="font-medium text-lg md:text-xl">Models</h3>
        <div className="overflow-y-auto  grid  md:grid-cols-2  gap-8 pr-2 lg:w-[80%]">
          {models.map((model) => (
            <div
              key={model.id}
              className="w-full p-2 flex gap-4 items-center border border-primary_8 rounded-xl"
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs bg-[#232323] py-1 px-2 w-max rounded-full text-[#8F8F8F]">
                  {model.title}
                </span>
                <h4>{model.name}</h4>
                <small className="text-sm text-[#C1C1C1]">{model.desc}</small>
                <div className="text-[#5D5D5D] flex gap-4 items-center text-xs">
                  <span>{model.date}</span>
                  <span className="flex gap-1 items-center">
                    <AiOutlineDownload />
                    {model.download}K
                  </span>
                  <span className="flex gap-1 items-center">
                    <AiOutlineHeart />
                    {model.like}
                  </span>
                </div>
              </div>
              <Image src={box} alt="model image" />
            </div>
          ))}
        </div>
      </section>
    </DashLayout>
  )
}
