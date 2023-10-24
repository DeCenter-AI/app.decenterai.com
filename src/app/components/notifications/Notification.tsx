import Image from 'next/image'
import React from 'react'
import { GoDownload } from 'react-icons/go'
import { PiListChecks } from 'react-icons/pi'
const Notification = ({data}) => {
  return (
    <div>
      <div>
        <Image src={data.avatar} alt={`${data.name} avatar`} />
        <div>
          <h4>{data.name}</h4>
          <span>{data.msg}</span>
        </div>
      </div>
      <div>
        <button>{data.id == 2 ? <PiListChecks /> : <GoDownload />}</button>
        <span>{data.time}</span>
      </div>
    </div>
  )
    
}

const modalNotification = () => {
    return (
        <div>

        </div>
    )
}

export  {Notification, modalNotification}
