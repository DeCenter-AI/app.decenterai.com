import notIcon from 'public/notification.png'
import { DashLayout } from '../dashboard/dashLayout'
import Image from 'next/image'
import { GoSortDesc, GoDownload } from 'react-icons/go'
import { PiListChecks, PiGridFourLight, PiOptionBold, PiChecks } from 'react-icons/pi'
import { RxCaretDown } from 'react-icons/rx'

const Notification = () => {
  return (
    <DashLayout>
      <section className=" py-10">
        <header className="flex flex-col">
          <div className="flex justify-between gap-4 items-center px-6 border border-primary_8 py-2 rounded-lg rounded-b-none">
            <Image src={notIcon} alt="notification" />
            <div className="flex">
              <PiOptionBold />
              <input
                type="text"
                className="rounded-full bg-primary_9 placeholder:text-primary_8 py-2 px-4 w-full active:hover:focus:outline-none active:hover:focus:border-none"
                placeholder="Filter by name"
              />
            </div>
            <div className="flex items-center gap-8 sm:gap-12 md:gap-20">
              <p className="flex items-center">
                <GoSortDesc size={25} />
                <span>sort</span>
              </p>
              <p className="flex items-center gap-1">
                <RxCaretDown className="text-primary_9" size={20} />
                <PiGridFourLight size={25} className="text-primary_7 " />
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-4 items-center px-6 border border-primary_8 py-2 rounded-lg rounded-t-none w-max">
            all
          </div>
        </header>
      </section>
    </DashLayout>
  )
}

export default Notification
