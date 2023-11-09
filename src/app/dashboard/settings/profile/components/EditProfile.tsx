'use client'
import Image from 'next/image'

import editProfile from 'public/edit-profile.png'
import { AiOutlineCamera } from 'react-icons/ai'
import useUserStore from '@/state/userStore'
import { myImageLoader } from '@/lib/imageHelper'
const EditProfile = ({ onclick }) => {
  const userStore = useUserStore()
  const user = userStore.user

  const handleNameChange = (event) => {
    userStore.setUser({
      name: `${event.target.value}`,
    })
  }

  const firstLastName = (name: string): [string, string] => {
    let names = user.name.split(' ')
    let firstName = names[0]
    let lastName = names.slice(1).join(' ')
    return [firstName, lastName]
  }

  return (
    <div className="absolute inset-0 z-50 bg-primary_11 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-[85%]  my-12 mx-auto transition-all duration-500 ease-in-out rounded-xl px-6 py-6 flex flex-col gap-6 shadow-xl">
      <Image src={editProfile} alt="edit profile" />
      <div className="relative w-[25%]">
        <Image
          src={user?.profileImage}
          alt="profile pic"
          loader={myImageLoader}
          unoptimized
          width={80}
          height={70}
          className="max-w-[100%] max-h-[100%] rounded-full mr-3"
        />

        <button className="absolute -bottom-1 -right-1 text-[#8F8F8F] bg-[#2B2B2B] p-2 rounded-full">
          <AiOutlineCamera size={20} />
        </button>
      </div>
      <form action="" className="text-[#5D5D5D] text-sm flex flex-col gap-4 relative">
        <div className="grid gap-4 w-full">
          <div className="flex flex-col gap-2">
            {/*FIXME: keep firstName and last name ; .*/}
            <label htmlFor="firstName" className="font-bold ">
              Name
            </label>
            <input
              type="text"
              value={user.name}
              onChange={handleNameChange}
              className="text-[#8F8F8F] border border-primary_8 rounded-xl p-3 focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Username" className="font-medium text-[#FDFDFD] ">
            Username
          </label>
          <input
            type="text"
            placeholder="Nick name (optional)"
            className="text-[#8F8F8F] border border-primary_8 rounded-xl p-3 focus:outline-none bg-transparent"
            id="Username"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bold ">
            Email address
          </label>
          <input
            type="text"
            value={user?.email}
            className="text-[#8F8F8F] border border-primary_8 rounded-xl p-3 focus:outline-none bg-transparent"
            id="email"
            name="email"
          />
        </div>
        {/*TODO: add BIO: https://www.figma.com/file/HWwY6JKy3bnnu1SfSeRL8d/DeCenter-AI?type=design&node-id=1819-27457&mode=design&t=6QKT5XLz4cOtdUm6-0*/}
        <div className="font-semibold flex justify-end gap-4 items-center mt-2">
          <button
            className=" bg-transparent border border-primary_8 rounded-full px-4 py-3 text-[#F5F5F5] w-[140px] text-center"
            onClick={onclick}>
            Cancel
          </button>
          <button
            className=" bg-primary_10 rounded-full px-4 py-3 w-[140px] text-center"
            onClick={onclick}>
            Save changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
