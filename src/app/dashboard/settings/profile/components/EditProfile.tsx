import avatars from '@public/avatars'
import Image from 'next/image'
import editProfile from 'public/edit-profile.png'
import { AiOutlineCamera } from 'react-icons/ai'
const EditProfile = () => {
  return (
    <div className="absolute inset-0 z-50 bg-primary_11 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-[85%]  my-16 mx-auto transition-all duration-500 ease-in-out rounded-xl p-6 flex flex-col gap-6">
      <Image src={editProfile} alt="edit profile" />
      <div className="relative w-[25%]">
        <Image src={avatars.avatar} alt="profile icon" className="w-full h-full" />

        <button className="absolute -bottom-2 -right-2 text-[#8F8F8F] bg-[#2B2B2B] p-2 rounded-full">
          <AiOutlineCamera size={20} />
        </button>
      </div>
      <form action="" className="text-[#5D5D5D] text-sm flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="font-bold ">
              First name
            </label>
            <input
              type="text"
              value="Dave"
              className="text-[#8F8F8F] border border-primary_8 rounded-xl p-3 focus:outline-none bg-transparent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="font-bold ">
              Last name
            </label>
            <input
              type="text"
              value="Ayegoro"
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
            value="Dayegoro@email.com"
            className="text-[#8F8F8F] border border-primary_8 rounded-xl p-3 focus:outline-none bg-transparent"
            id="email"
            name="email"
          />
        </div>
      </form>
    </div>
  )
}

export default EditProfile
