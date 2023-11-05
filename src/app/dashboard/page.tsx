'use client'

import { useState } from 'react'
import { DashLayout } from './dashLayout'
import RocketImg from '@public/rocket.png'
import Image from 'next/image'

import repository from '@/data/repository'
import { GoDownload } from 'react-icons/go'
import { BiLike } from 'react-icons/bi'
import EmptyRepository from './repository/components/empty_repo'


export default function Page() {
  const [toggle, setToggle] = useState<boolean>(false)
  const handleToggle = ()=>{
    setToggle(!toggle)
  }
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

        <div className="grid grid-cols-4 gap-5 h-[20%] ">
          <div className=" rounded-xl flex flex-col justify-between gap-2 border  border-primary_9 h-full px-4 py-4">
            <div className="h-[15%] flex items-center">
              <p className="text-sm">Total trained models</p>
            </div>
            <div>
              <span className="text-xl font-bold">0</span>
            </div>
          </div>
          <div className=" rounded-xl flex flex-col justify-between gap-2 border  border-primary_9 h-full px-4 py-4">
            <div className="h-[15%] flex items-center">
              <p className="text-sm">New models</p>
            </div>
            <div>
              <span className="text-xl font-bold">0</span>
            </div>
          </div>
          <div className=" rounded-xl flex flex-col justify-between gap-2 border  border-primary_9 h-full px-4 py-4">
            <div className="h-[15%] flex items-center">
              <p className="text-sm">Fine-tune models</p>
            </div>
            <div>
              <span className="text-xl font-bold">0</span>
            </div>
          </div>
          <div className=" rounded-xl flex flex-col justify-between gap-2 border  border-primary_9 h-full px-4 py-4">
            <div className="h-[15%] flex items-center">
              <p className="text-sm">Template models</p>
            </div>
            <div>
              <span className="text-xl font-bold">0</span>
            </div>
          </div>
        </div>

        <div className=" h-[40%]">
          <div className='flex gap-2'>
            <span className="text-lg">Recently created models</span>
            <input type='checkbox' onClick={handleToggle}/>
          </div>
          <div className="w-full overflow-auto   max-h-full px-8 py-8">
            {
              !toggle  ?(
               <EmptyRepository />
            ) : (
              <div className="grid gap-5 grid-cols-2">
                {repository.map((item) => (
                  <div
                    key={item.id}
                    className=" border border-primary_9 flex px-5  py-3 items-center rounded-xl  h-[170px] "
                  >
                    <div className="w-[80%] h-full">
                      <div className=" flex h-[25%] items-start ">
                        <span className="bg-primary_11 rounded-full text-primary_8 py-1 px-3">
                          {item.label}
                        </span>
                      </div>
                      <div className="h-[20%]">
                        <span className="text-lg ">{item.title}</span>
                      </div>
                      <div className="flex items-center h-[40%]">
                        <p className="text-xs">{item.description} </p>
                      </div>
                      <div className=" h-[15%] text-xs text-primary_8 flex gap-4">
                        <div>
                          <span>Updated {item.time}</span>
                        </div>
                        <div className="flex">
                          <GoDownload />
                          <span>{item.dowloaded}</span>
                        </div>
                        <div className="flex">
                          <BiLike />
                          <span>{item.likes}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-[20%] h-full bg-primary_11 "></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </DashLayout>
  )
}
