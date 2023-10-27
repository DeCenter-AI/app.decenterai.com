import React from 'react'

import { DashLayout } from './dashLayout'
import RocketImg from '@public/rocket.png'
import TeamIcon from '@public/teamIcon.png'
import TrainIcon from '@public/trainIcon.png'
import TrophyIcon from '@public/TrophyIcon.png'
import TaskIcon from '@public/taskIcon.png'
import Image from 'next/image'
import avatar from '@public/Rectangle 75.png'

export default function Page() {
  return (
    <DashLayout>
      <div className="h-full max-h-full flex flex-col justify-evenly   w-full px-2   text-white">
        <div className="border border-primary_9 px-4  rounded-xl py-4 flex max-h-[20%] max-w-[95%] mx-auto ">
          <div className=" grow">
            <div>
              <h1 className="font-logirentBold text-xl">
                Train your AI model to the stars instantly.
              </h1>
            </div>
            <div className=" mt-5">
              <span className="text-xs">
                Launch your AI project into orbit with our instant training platform. We
                use the latest AI technology to help you train your model quickly and
                efficiently.
              </span>
            </div>
          </div>
          <div className="-mt-8 -mb-2">
            <Image className="grayscale" width={250} src={RocketImg} alt="rocket-img" />
          </div>
        </div>

        <div className="grid grid-cols-4 max-h-[40%] gap-5">
          <div className="p-4 rounded-xl border border-primary_9 ">
            <div className="mb-2">
              <p>Total teams</p>
            </div>

            <div className="flex items-center mb-6 pb-4 border-b-2 border-primary_9">
              <span className="grow text-xl font-bold">0</span>
              <Image src={TeamIcon} width={25} height={30} alt="" />
            </div>
            <div className="flex items-center mb-2  ">
              <span className="grow text-xs">Personal</span>
              <span>0</span>
            </div>
            <div className="flex items-center   ">
              <span className="grow text-xs">General</span>
              <span>0</span>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-primary_9 ">
            <div className="mb-2">
              <p>Total trained models</p>
            </div>

            <div className="flex items-center mb-6 pb-4 border-b-2 border-primary_9">
              <span className="grow text-xl font-bold">0</span>
              <Image src={TrainIcon} width={25} height={30} alt="" />
            </div>
            <div className="flex items-center mb-2  ">
              <span className="grow text-xs">Created </span>
              <span>0</span>
            </div>
            <div className="flex items-center   ">
              <span className="grow text-xs">Fine-tune/Template</span>
              <span>0</span>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-primary_9 ">
            <div className="mb-2">
              <p>Total tasks</p>
            </div>

            <div className="flex items-center mb-6 pb-4 border-b-2 border-primary_9">
              <span className="grow text-xl font-bold">0</span>
              <Image src={TaskIcon} width={25} height={30} alt="" />
            </div>
            <div className="flex items-center mb-2  ">
              <span className="grow text-xs">Completed </span>
              <span>0</span>
            </div>
            <div className="flex items-center   ">
              <span className="grow text-xs">Pending</span>
              <span>0</span>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-primary_9 ">
            <div className="mb-4">
              <p>Total rewards</p>
            </div>

            <div className="flex items-center mb-6 pb-2 border-b-2 border-primary_9">
              <span className="grow text-xl font-bold">0</span>
              <Image src={TrophyIcon} width={25} height={30} alt="" />
            </div>
            <div className="flex items-center mb-2  ">
              <span className="grow text-xs">Personal </span>
              <span>0</span>
            </div>
            <div className="flex items-center   ">
              <span className="grow text-xs">General</span>
              <span>0</span>
            </div>
          </div>
        </div>

        <div className=" flex gap-5 max-h-[40%] ">
          <div className="w-[70%] rounded-xl border border-primary_9  px-8 py-8"></div>

          <div className=" w-[30%]  bg-primary_11 px-2 rounded-xl ">
            <div className=" p-2 ">
              <span className="font-bold text-lg">My Task</span>
            </div>

            <div className="overflow-y-scroll h-[85%]">
              <div className="flex items-center gap-5 my-4 ">
                <div>
                  <Image src={avatar} alt="" className="w-[40px] h-[40px] rounded-full" />
                </div>
                <div className="grow pb-5 border-b-2 border-primary_9">
                  <div className="mb-3">
                    <span className="px-2 py-1 text-[12px] text-primary_7 rounded-full bg-prborder-primary_9">
                      Crankshaft
                    </span>
                  </div>
                  <div className="mb-3">
                    <h2 className="text-lg font-bold">Mohammed </h2>
                  </div>
                  <div className="flex justify-between text-[10px] text-primary_7">
                    <span>Assigned you a task on “Speech...</span>
                    <span className="">12 Minutes ago</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 mb-4">
                <div>
                  <Image src={avatar} alt="" className="w-[40px] h-[40px] rounded-full" />
                </div>
                <div className="grow pb-5 border-b-2 border-primary_9">
                  <div className="mb-3">
                    <span className="px-2 py-1 text-[12px] text-primary_7 rounded-full bg-prborder-primary_9">
                      Crankshaft
                    </span>
                  </div>
                  <div className="mb-3">
                    <h2 className="text-lg font-bold">Mohammed </h2>
                  </div>
                  <div className="flex justify-between text-[10px] text-primary_7">
                    <span>Assigned you a task on “Speech...</span>
                    <span className="">12 Minutes ago</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 mb-4">
                <div>
                  <Image src={avatar} alt="" className="w-[40px] h-[40px] rounded-full" />
                </div>
                <div className="grow pb-5 border-b-2 border-primary_9">
                  <div className="mb-3">
                    <span className="px-2 py-1 text-[12px] text-primary_7 rounded-full bg-prborder-primary_9">
                      Crankshaft
                    </span>
                  </div>
                  <div className="mb-3">
                    <h2 className="text-lg font-bold">Mohammed </h2>
                  </div>
                  <div className="flex justify-between text-[10px] text-primary_7">
                    <span>Assigned you a task on “Speech...</span>
                    <span className="">12 Minutes ago</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 mb-4">
                <div>
                  <Image src={avatar} alt="" className="w-[40px] h-[40px] rounded-full" />
                </div>
                <div className="grow pb-5 border-b-2 border-primary_9">
                  <div className="mb-3">
                    <span className="px-2 py-1 text-[12px] text-primary_7 rounded-full bg-prborder-primary_9">
                      Crankshaft
                    </span>
                  </div>
                  <div className="mb-3">
                    <h2 className="text-lg font-bold">Mohammed </h2>
                  </div>
                  <div className="flex justify-between text-[10px] text-primary_7">
                    <span>Assigned you a task on “Speech...</span>
                    <span className="">12 Minutes ago</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 mb-4">
                <div>
                  <Image src={avatar} alt="" className="w-[40px] h-[40px] rounded-full" />
                </div>
                <div className="grow pb-5 border-b-2 border-primary_9">
                  <div className="mb-3">
                    <span className="px-2 py-1 text-[12px] text rounded-full bg-prborder-primary_9">
                      Crankshaft
                    </span>
                  </div>
                  <div className="mb-3">
                    <h2 className="text-lg font-bold">Mohammed </h2>
                  </div>
                  <div className="flex justify-between text-[10px] text-">
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
