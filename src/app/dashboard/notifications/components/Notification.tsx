"use client"

import notifications from '@/data/notification'
import Image from 'next/image'
import React from 'react'
import { useEffect } from 'react';
import { GoDownload } from 'react-icons/go'
import { PiListChecks, PiDotsThree } from 'react-icons/pi'
import useNotificationStore from '@/state/notificationStore';

const Messages = () => {
  const { Notifications,  } = useNotificationStore()
  return (
    <main className="flex flex-col gap-4 h-full  px-2 overflow-y-auto">
      {Notifications && Object.values(Notifications).map(notification => (
        <div
          key={notification.id}
          className={`flex justify-between gap-12 items-center  py-2 rounded-3xl px-6 border border-primary_8 `}
        >
          <div className="flex items-center gap-2">
            <Image src={notification.avatar} alt={`${it.name} avatar`} />
            <div>
              <h4>{notification.name}</h4>
              <span className="text-[#92929D]">{notification.message}</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <button className="rounded-full bg-primary_8 text-primary_6 p-2">
              {notification.id == "2" ? <PiListChecks size={20} /> : <GoDownload size={20} />}
            </button>
            {/* <span className="text-primary_8 ">{notification.time}</span> */}
            <PiDotsThree size={25} className="text-primary_8 cursor-pointer" />
          </div>
        </div>
      ))}
    </main>
  )
}

const ModalNotification = () => {
 const { Notifications,  } = useNotificationStore()

  // useEffect(() => {
  //   // Fetch notifications when the component mounts
  //   useNotificationStore.getState().fetchNotifications();
  // }, []);
  return (
    <main className="flex flex-col gap-4   text-xs h-[400px] overflow-y-scroll px-2 ">
      {notifications.map((notification) => {
        if (notification.id < 7) {
          return (
            <div
              key={notification.id}
              className={`flex justify-between gap-8 items-center  py-2 rounded-3xl px-2 border border-primary_8 ${!notification.read ? ' ' : 'opacity-30'
                }`}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={notification.avatar}
                  alt={`${notification.name} avatar`}
                  className="w-[12%]"
                />
                <div>
                  <h4 className="text-[#F0F0F0]">{notification.name}</h4>
                  <span className="text-[#92929D]">{notification.msg}</span>
                </div>
              </div>

              <span className="text-[#5D5D5D]">{notification.time}</span>
            </div>
          )
        }
      })}
    </main>
  )
}

export { Messages, ModalNotification }
