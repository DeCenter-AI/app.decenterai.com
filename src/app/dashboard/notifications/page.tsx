import notIcon from 'public/notification.png'
import { DashLayout } from '../dashLayout'
import Image from 'next/image'
import { GoSortDesc } from 'react-icons/go'
import { PiGridFourLight, PiOptionBold, PiChecks } from 'react-icons/pi'
import { Messages } from './components/Notification'
import { RxCaretDown } from 'react-icons/rx'
import Link from 'next/link'

const Notification = () => {
  return (
    <DashLayout>
      <div className="py-6 flex flex-col gap-6  font-archivo h-full w-full ">
        <div className="flex flex-col  h-[20%]">
          <div className="flex justify-between gap-4 items-center px-6 border border-primary_8 py-3 rounded-lg rounded-b-none">
            <Image src={notIcon} alt="notification" />
            <div className="flex items-center rounded-full bg-primary_9 py-2 px-4  ">
              <PiOptionBold className="mr-2 text-primary_7" size={30} />
              <input
                type="text"
                className="w-full bg-transparent placeholder:text-primary_7 focus:outline-none focus:border-none"
                placeholder="Filter by name"
              />
            </div>
            <div className="flex items-center gap-8 sm:gap-12 md:gap-20">
              <p className="flex items-center gap-1">
                <GoSortDesc size={25} className="text-primary_9" />
                <span className="text-primary_6">sort</span>
              </p>
              <p className="flex items-center gap-1">
                <RxCaretDown className="text-primary_9" size={20} />
                <PiGridFourLight size={25} className="text-primary_7 " />
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-8 items-center px-6 border border-primary_8 py-2 rounded-lg rounded-t-none border-t-0 w-max font-medium">
            <Link href="/notifications" className="text-primary_6">
              All
            </Link>
            <span className="text-primary_9 hover:text-primary_6 cursor-pointer">
              Downloads
            </span>
            <span className="text-primary_9 hover:text-primary_6 cursor-pointer">
              Task
            </span>
          </div>
        </div>

        <div className="flex h-[80%] gap-4 w-full items-start  ">
          <div className="h-full w-[85%] ">
            <Messages />
          </div>
          <div className="w-[15%] h-full">
            <button className="flex gap-2 items-center bg-primary_10 rounded-full px-4 py-3 mt-2">
              <PiChecks className="text-primary_8" size={20} />
              <span className="text-primary_3">Mark all as read</span>
            </button>
          </div>
        </div>
      </div>
    </DashLayout>
  )
}

export default Notification
