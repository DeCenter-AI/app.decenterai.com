import notifications from '@/data/notification'
import Image from 'next/image'
import React from 'react'
import { GoDownload } from 'react-icons/go'
import { PiListChecks } from 'react-icons/pi'

const Messages = () => {
  return (
    <main className="flex flex-col gap-6  w-[80%] ">
      {notifications.map((item) => (
        <div
          key={item.id}
          className="flex justify-between gap-8 items-center border border-primary_8 py-2 rounded-3xl px-6">
          <div className="flex items-center gap-2">
            <Image src={item.avatar} alt={`${item.name} avatar`} />
            <div>
              <h4>{item.name}</h4>
              <span>{item.msg}</span>
            </div>
          </div>
          <div>
            <button>{item.id == 2 ? <PiListChecks /> : <GoDownload />}</button>
            <span>{item.time}</span>
          </div>
        </div>
      ))}
    </main>
  )
    
}

const modalNotification = () => {
    return (
        <div>

        </div>
    )
}

export  {Messages, modalNotification}
