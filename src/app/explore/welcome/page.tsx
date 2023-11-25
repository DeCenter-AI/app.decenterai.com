'use client'
import Image from 'next/image'
import useUserStore from '@/state/userStore'
import { myImageLoader } from '@/lib/imageHelper'
import { AiOutlineCamera } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

export default function Page() {

    const { push } = useRouter()
    const userStore = useUserStore()

    const handleNameChange = (event) => {
        if (userStore.user) {
            userStore.setUser({
                name: `${event.target.value}`,
            });
        }

    }

    const handleBioChange = (event) => {
        userStore.setUser({
            bio: `${event.target.value}`,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        push('/dashboard')
    }

    return (
        <div className="absolute inset-0 z-50 bg-black w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-[90%] max-h-screen mx-auto transition-all duration-500 ease-in-out rounded-xl px-6 py-6 flex flex-col gap-4 shadow-xl my-auto" style={{ border: '1px solid white' }}>
            <h1 className="font-logirentBold text-primary_1 text-center font-bold text-5xl rounded-md py-3 w-[80%] lg:w-[100%] h-[10%]"
            >
                {' '}
                Welcome
            </h1>
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

                <button className="absolute -bottom-2 left-10 text-primary_7 bg-primary_10 p-1.5 rounded-full">
                    <AiOutlineCamera size={20} />
                </button>
            </div>
            <form action="" className="text-primary_8 text-sm flex flex-col gap-4 relative">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-1">
                        {/*FIXME: keep firstName and last name ; .*/}
                        <label htmlFor="name" className="font-bold text-sm">
                            First Name
                        </label>
                        <input
                            type="text"
                            value={userStore.user?.name}
                            onChange={handleNameChange}
                            className="text-primary_7 border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
                        />

                    </div>
                    <div className="flex flex-col gap-1">
                        {/*FIXME: keep firstName and last name ; .*/}
                        <label htmlFor="name" className="font-bold text-sm">
                            Last Name
                        </label>
                        <input
                            type="text"
                            value={userStore.user?.name}
                            onChange={handleNameChange}
                            className="text-primary_7 border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
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
                        value={userStore.user ? userStore.user.name : ''}
                        className="text-primary_7 border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
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
                        className="text-primary_7 border border-primary_8 rounded-xl p-2 focus:outline-none bg-transparent"
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
                        className="text-primary_7 border border-primary_8 rounded-xl p-3 focus:outline-none bg-transparent h-12 overflow-y-hidden"
                        placeholder="About you (optional)"
                        onChange={handleBioChange}
                    ></textarea>
                </div>
                <div className="font-semibold flex justify-center gap-4 items-center mt-2">
                    <button
                        onClick={handleSubmit}
                        className="bg-primary_10 bg-blue rounded-full px-4 py-2 w-[200px] text-center mt-4"
                    // TODO: fixme this is not activated. Use userStore.syncDB to save to DB. And pass false as the second argument to userStore.setUser
                    >

                        Proceed
                    </button>
                </div>
            </form>
        </div>
    )
}
