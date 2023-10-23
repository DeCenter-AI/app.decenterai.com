import { DashLayout } from "../dashLayout"
import { GoBell } from 'react-icons/go'
import { BiWallet, BiLock, BiLogOut } from 'react-icons/bi'
import { FaPerson } from 'react-icons/fa6'
function Page() {
    return (
        <DashLayout>
            <div className="h-full w-full px-4 flex gap-5 pt-10 text-white">
                <div className="w-[80%]">
                    <div className="rounded-2xl border mb-4 gap-2 items-cente border-primary_9 flex px-4 py-5">
                        <div className="text-primary_8">
                            <FaPerson size={24} />
                        </div>
                        <span>Profile </span>

                    </div>

                    <div className="rounded-2xl border mb-4 gap-2 items-cente border-primary_9 flex px-4 py-5">
                        <div className="text-primary_8">
                            <BiLock size={24} />
                        </div>
                        <span>Security </span>

                    </div>

                    <div className="rounded-2xl border mb-4 gap-2 items-cente border-primary_9 flex px-4 py-5">
                        <div className="text-primary_8">
                            <BiWallet size={24} />
                        </div>
                        <span>Wallet connect</span>

                    </div>

                    <div className="rounded-2xl border mb-4 gap-2 items-center border-primary_9 flex px-4 py-5">
                        <div className="text-primary_8">
                            <GoBell size={24} />
                        </div>

                        <span>Notification</span>

                    </div>


                </div>
                <div className="w-[20%]">
                    <button className="flex bg-primary_9 items-center gap-3 text-white  w-full justify-center py-2 rounded-xl">
                        <div className="">
                            <BiLogOut size={18} />
                        </div>
                        <span className="text-xs">Log Out</span>

                    </button>
                </div>

            </div>
        </DashLayout>
    )
}

export default Page