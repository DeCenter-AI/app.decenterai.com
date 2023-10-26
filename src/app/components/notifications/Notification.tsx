import notifications from '@/data/notification'
import Image from 'next/image'
import React from 'react'
import { GoDownload } from 'react-icons/go'
import { PiListChecks, PiDotsThree } from 'react-icons/pi'

const Messages = () => {
  return (
    <main className="flex flex-col gap-4  w-[80%] ">
      {notifications.map((item) => (
        <div
          key={item.id}
          className={`flex justify-between gap-12 items-center  py-2 rounded-3xl px-6 border border-primary_8  ${
            !item.read ? '' : 'opacity-30'
          }`}
        >
          <div className="flex items-center gap-2">
            <Image src={item.avatar} alt={`${item.name} avatar`} />
            <div>
              <h4>{item.name}</h4>
              <span className="text-[#92929D]">{item.msg}</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <button className="rounded-full bg-primary_8 text-primary_6 p-2">
              {item.id == 2 ? <PiListChecks size={20} /> : <GoDownload size={20} />}
            </button>
            <span className="text-primary_8 ">{item.time}</span>
            <PiDotsThree size={25} className="text-primary_8 cursor-pointer" />
          </div>
        </div>
      ))}
    </main>
  )
}

const ModalNotification = () => {
  return (
    <main className="flex flex-col gap-4   text-xs h-[400px] overflow-y-scroll px-2 ">
      {notifications.map((item) => {
        if (item.id < 7) {
          return (
            <div
              key={item.id}
              className={`flex justify-between gap-8 items-center  py-2 rounded-3xl px-2 border border-primary_8 ${
                !item.read ? ' ' : 'opacity-30'
              }`}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={item.avatar}
                  alt={`${item.name} avatar`}
                  className="w-[12%]"
                />
                <div>
                  <h4 className="text-[#F0F0F0]">{item.name}</h4>
                  <span className="text-[#92929D]">{item.msg}</span>
                </div>
              </div>

              <span className="text-[#5D5D5D]">{item.time}</span>
            </div>
          )
        }
      })}
    </main>
  )
}

export { Messages, ModalNotification }
