import React from 'react'
import { usePathname } from 'next/navigation'
import { DashLayout } from './dashLayout'
import RocketImg from '@public/rocket.png'
import TeamIcon from '@public/teamIcon.png'
import TrainIcon from '@public/trainIcon.png'
import TrophyIcon from '@public/TrophyIcon.png'
import TaskIcon from '@public/taskIcon.png'
import Image from 'next/image'
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
              <span className="text-xs overflow-hidden">
                Launch your AI project into orbit with our instant training platform. We
                use the latest AI technology to help you train your model quickly and
                efficiently.
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

        <div className="grid grid-cols-4 gap-5 h-[30%] ">
          <div className=" rounded-xl flex flex-col gap-2 border  border-primary_9 h-full px-4 py-4">
            <div className="h-[15%] flex items-center">
              <p className="text-sm">Total teams</p>
            </div>

            <div className="flex items-center h-[30%] pb-4 border-b-2 border-primary_9">
              <span className="grow text-2xl font-bold">0</span>
              <PiUsersThree size={35} className="text-primary_8" />
            </div>
            <div className="flex items-center h-[30%] ">
              <span className="grow text-xs">Personal</span>
              <span>0</span>
            </div>
            <div className="flex items-center h-[25%]  ">
              <span className="grow text-xs">General</span>
              <span>0</span>
            </div>
          </div>
          <div className=" rounded-xl flex flex-col gap-2 border  border-primary_9 h-full px-4 py-4">
            <div className="h-[15%] flex items-center">
              <p className="text-sm">Total trained models</p>
            </div>

            <div className="flex items-center h-[30%] pb-4 border-b-2 border-primary_9">
              <span className="grow text-2xl font-bold">0</span>
              <HiOutlineChip size={35} className="text-primary_8" />
            </div>
            <div className="flex items-center h-[30%] ">
              <span className="grow text-xs">Created </span>
              <span>0</span>
            </div>
            <div className="flex items-center h-[25%]  ">
              <span className="grow text-xs">Fine-tune/Template</span>
              <span>0</span>
            </div>
          </div>
          <div className=" rounded-xl flex flex-col gap-2 border  border-primary_9 h-full px-4 py-4">
            <div className="h-[15%] flex items-center">
              <p className="text-sm">Total tasks</p>
            </div>

            <div className="flex items-center h-[30%] pb-4 border-b-2 border-primary_9">
              <span className="grow text-2xl font-bold">0</span>
              <BsClipboard size={25} className="text-primary_8" />
            </div>
            <div className="flex items-center h-[30%] ">
              <span className="grow text-xs">Completed</span>
              <span>0</span>
            </div>
            <div className="flex items-center h-[25%]  ">
              <span className="grow text-xs">Pending</span>
              <span>0</span>
            </div>
          </div>
          <div className=" rounded-xl flex flex-col gap-2 border  border-primary_9 h-full px-4 py-4">
            <div className="h-[15%] flex items-center">
              <p className="text-sm">Total rewards</p>
            </div>

            <div className="flex items-center h-[30%] pb-4 border-b-2 border-primary_9">
              <span className="grow text-2xl font-bold">0</span>
              <PiTrophyBold size={35} className="text-primary_8" />
            </div>
            <div className="flex items-center h-[30%] ">
              <span className="grow text-xs">Personal</span>
              <span>0</span>
            </div>
            <div className="flex items-center h-[25%]  ">
              <span className="grow text-xs">General</span>
              <span>0</span>
            </div>
          </div>
        </div>

        <div className="flex gap-5  h-[40%] overflow-auto">
          <div className="w-[70%] rounded-xl border border-primary_9 h-full px-8 py-8"></div>

          <div className="h-full w-[30%]  bg-primary_11 px-2 rounded-xl flex flex-col gap-3">
            <div className="h-[15%] px-2 py-4">
              <span className="font-bold text-xl">My Task</span>
            </div>

            <div className="overflow-y-auto flex flex-col gap-6 h-[85%] relative">
              <div className="flex items-center gap-1  min-h-[100px] 0">
                <div className="w-[15%] flex items-center justify-center ">
                  <Image src={avatar} alt="" className="w-[40px] h-[40px] rounded-full" />
                </div>
                <div className=" w-[85%]  border-b-2 h-full border-primary_9 px-2">
                  <div className="h-[30%] flex items-center">
                    <span className="px-2 py-1 text-xs text-primary_7 rounded-full bg-primary_9">
                      Crankshaft
                    </span>
                  </div>
                  <div className="h-[30%] flex items-center">
                    <h2 className="font-bold text-md">Mohammed </h2>
                  </div>
                  <div className="flex justify-between text-[10px] h-[40%] items-center text-primary_7">
                    <span>Assigned you a task on “Speech...</span>
                    <span className="">12 Minutes ago</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1  min-h-[100px] 0">
                <div className="w-[15%] flex items-center justify-center ">
                  <Image src={avatar} alt="" className="w-[40px] h-[40px] rounded-full" />
                </div>
                <div className=" w-[85%]  border-b-2 h-full border-primary_9 px-2">
                  <div className="h-[30%] flex items-center">
                    <span className="px-2 py-1 text-xs text-primary_7 rounded-full bg-primary_9">
                      Crankshaft
                    </span>
                  </div>
                  <div className="h-[30%] flex items-center">
                    <h2 className="font-bold text-md">Mohammed </h2>
                  </div>
                  <div className="flex justify-between text-[10px] h-[40%] items-center text-primary_7">
                    <span>Assigned you a task on “Speech...</span>
                    <span className="">12 Minutes ago</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1  min-h-[100px] 0">
                <div className="w-[15%] flex items-center justify-center ">
                  <Image src={avatar} alt="" className="w-[40px] h-[40px] rounded-full" />
                </div>
                <div className=" w-[85%]  border-b-2 h-full border-primary_9 px-2">
                  <div className="h-[30%] flex items-center">
                    <span className="px-2 py-1 text-xs text-primary_7 rounded-full bg-primary_9">
                      Crankshaft
                    </span>
                  </div>
                  <div className="h-[30%] flex items-center">
                    <h2 className="font-bold text-md">Mohammed </h2>
                  </div>
                  <div className="flex justify-between text-[10px] h-[40%] items-center text-primary_7">
                    <span>Assigned you a task on “Speech...</span>
                    <span className="">12 Minutes ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  )
}
