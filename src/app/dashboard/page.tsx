import React from 'react'
import { usePathname } from 'next/navigation'
import { DashLayout } from './dashLayout'
import RocketImg from '@public/rocket.png'
import TeamIcon from '@public/teamIcon.png'
import TrainIcon from '@public/trainIcon.png'
import TrophyIcon from '@public/TrophyIcon.png'
import TaskIcon from '@public/taskIcon.png'
import Image from 'next/image'
import Emptyimg from "@public/magnify.png"
import avatar from '@public/Rectangle 75.png'
import { BsClipboard } from 'react-icons/bs'
import { PiTrophyBold, PiUsersThree } from 'react-icons/pi'
import { HiOutlineChip } from 'react-icons/hi'

export default function Page() {
  return (
    <DashLayout>
      <div className="h-full w-full flex flex-col gap-6 px-2 py-2  text-white ">
        <div className="border h-[30%] border-primary_9 0 px-4  rounded-xl py-4 flex max-w-[90%]  mx-auto ">
          <div className="h-full">
            <div className="h-[50%] flex items-center ">
              <h1 className="font-logirentBold text-3xl">
                Train your AI model to the stars instantly.
              </h1>
            </div>
            <div className=" h-[50%] flex items-center ">
              <span className="text-sm overflow-hidden">
              Launch your AI project into orbit with our instant training platform. We use the latest AI technology to help you train your model quickly and efficiently.
              </span>
            </div>
          </div>
          <div className="h-full -mt-6">
            <Image
              className="grayscale"
              src={RocketImg}
              height={300}
              width={300}
              alt="rocket-img"
              style={{ maxWidth: '100%' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 h-[20%] ">
          <div className=" rounded-xl flex flex-col justify-between gap-2 border  border-primary_9 h-full px-4 py-4">
            <div className="h-[15%] flex items-center">
              <p className="text-sm">Total trained models</p>
            </div>
            <div>
              <span className= "text-xl font-bold">0</span>
            </div>

          </div>
          <div className=" rounded-xl flex flex-col justify-between gap-2 border  border-primary_9 h-full px-4 py-4">
            <div className="h-[15%] flex items-center">
              <p className="text-sm">New models</p>
            </div>
            <div>
              <span className= "text-xl font-bold">0</span>
            </div>

          </div>
          <div className=" rounded-xl flex flex-col justify-between gap-2 border  border-primary_9 h-full px-4 py-4">
            <div className="h-[15%] flex items-center">
              <p className="text-sm">Fine-tune models</p>
            </div>
            <div>
              <span className= "text-xl font-bold">0</span>
            </div>

          </div>
          <div className=" rounded-xl flex flex-col justify-between gap-2 border  border-primary_9 h-full px-4 py-4">
            <div className="h-[15%] flex items-center">
              <p className="text-sm">Template models</p>
            </div>
            <div>
              <span className= "text-xl font-bold">0</span>
            </div>

          </div>
         
          
       
        </div>

        <div className=" h-[50%]">
          <div>
            <span className='text-lg'>Recently created models</span>
          </div>
          <div className="w-full overflow-y-scroll   max-h-full px-8 py-8">
            <div className='flex flex-col justify-center items-center'>

             <div className='mb-2'>
             <Image src={Emptyimg} className='grayscale' height={136} width={171.67} alt='' />
             </div>
              <span className='text-center text-xs '>No models created yet.</span>

            </div>


          </div>

        
        </div>
      </div>
    </DashLayout>
  )
}
