'use client'
import Image from 'next/image'

import editProfile from 'public/edit-profile.png'
import { AiOutlineCamera } from 'react-icons/ai'
import useUserStore from '@/state/userStore'
import { myImageLoader } from '@/lib/imageHelper'
const EditProfile = ({ onclick }) => {
  const userStore = useUserStore()

  const handleNameChange = (event) => {
    userStore.setUser({
      name: `${event.target.value}`,
    })
  }

  const handleBioChange = (event) => {
    userStore.setUser({
      bio: `${event.target.value}`,
    })
  }

  // const firstLastName = (name: string): [string, string] => {
  //   let names = user.name.split(' ')
  //   let firstName = names[0]
  //   let lastName = names.slice(1).join(' ')
  //   return [firstName, lastName]
  // }

  return (
    <div className="absolute inset-0 z-50 bg-primary_11 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-[90%]   max-h-screen mx-auto transition-all duration-500 ease-in-out rounded-xl px-6 py-6 flex flex-col gap-4 shadow-xl my-auto">
      <Image src={editProfile} alt="edit profile" />
      <div className="relative w-[25%] mx-auto">
        <Image
          src={userStore.user?.profileImage}
          alt="profile pic"
          loader={myImageLoader}
          unoptimized
          width={70}
          height={70}
          className="max-w-[100%] max-h-[100%] rounded-full "
        />

        <button className="absolute -bottom-2 left-10 text-[#8F8F8F] bg-[#2B2B2B] p-1.5 rounded-full">
          <AiOutlineCamera size={20} />
        </button>
      </div>
      <form action="" className="text-[#5D5D5D] text-sm flex flex-col gap-4 relative">
        <div className="grid gap-3 w-full">
          <div className="flex flex-col gap-1">
            {/*FIXME: keep firstName and last name ; .*/}
            <label htmlFor="name" className="font-bold text-sm">
              Name
            </label>
            <input
              type="text"
              value={userStore.user.name}
              onChange={handleNameChange}
              className="text-[#8F8F8F] border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="Username" className="font-medium text-[#FDFDFD] text-sm">
            Username
          </label>
          <input
            type="text"
            placeholder="Nick name (optional)"
            value={userStore.user.userName}
            className="text-[#8F8F8F] border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
            id="Username"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-bold text-sm">
            Email address
          </label>
          <input
            type="text"
            value={userStore.user?.email}
            className="text-[#8F8F8F] border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
            id="email"
            name="email"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="bio" className="font-medium text-[#FDFDFD] text-sm">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            value={userStore.user?.bio}
            className="text-[#8F8F8F] border border-primary_8 rounded-xl p-3 focus:outline-none bg-transparent h-12 overflow-y-hidden"
            placeholder="About you (optional)"
            onChange={handleBioChange}
          ></textarea>
        </div>
        <div className="font-semibold flex justify-end gap-4 items-center mt-2">
          <button className=" bg-transparent border border-primary_8 rounded-full px-4 py-3 text-[#F5F5F5] w-[140px] text-center">
            Cancel
          </button>
          <button className=" bg-primary_10 rounded-full px-4 py-3 w-[140px] text-center">
            Save changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile
