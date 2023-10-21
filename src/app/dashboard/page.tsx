'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import { DashLayout } from './dashLayout';
import RocketImg from '@public/rocket.png'
import TeamIcon from '@public/teamIcon.png'
import TrainIcon from '@public/trainIcon.png'
import TrophyIcon from '@public/TrophyIcon.png'
import TaskIcon from '@public/taskIcon.png'
import Image from 'next/image';

export default function Page() {
    const pathname = usePathname();
    return (
        <DashLayout >
            <div className='h-full max-h-screen w-full px-10 overflow-y-scroll  text-white'>
                <div className='border border-[#494949] px-4 mt-6 rounded-xl py-4 flex'>
                    <div className='pt-6'>
                        <div>
                            <h1 className='font-logirentBold text-3xl'>Train your AI model to the  stars instantly.</h1>
                        </div>
                        <div className=' mt-5'>
                            <span className='text-xs'>
                                Launch your AI project into orbit with our instant training platform. We use the latest AI technology to help you train your model quickly and efficiently.
                            </span>
                        </div>
                    </div>
                    <div className='-mt-8 -mb-11'>
                        <Image src={RocketImg} alt='rocket-img' />

                    </div>

                </div>

                <div className='grid grid-cols-4 gap-5 mt-10'>
                    <div className='p-4 rounded-xl border border-[#494949] '>
                        <div className='mb-4'>
                            <p>Total teams</p>
                        </div>
                       
                        <div className='flex items-center mb-6 pb-4 border-b-2 border-[#494949]'>
                            <span className='grow text-2xl font-bold'>0</span>
                            <Image src={ TeamIcon} alt='' />
                        </div>
                        <div className='flex items-center mb-4  '>
                            <span className='grow text-xs'>Personal</span>
                           <span>0</span>
                        </div>
                        <div className='flex items-center   '>
                            <span className='grow text-xs'>General</span>
                           <span>0</span>
                        </div>

                    </div>

                    <div className='p-4 rounded-xl border border-[#494949] '>
                        <div className='mb-4'>
                            <p>Total trained models</p>
                        </div>
                       
                        <div className='flex items-center mb-6 pb-4 border-b-2 border-[#494949]'>
                            <span className='grow text-2xl font-bold'>0</span>
                            <Image src={ TrainIcon} alt='' />
                        </div>
                        <div className='flex items-center mb-4  '>
                            <span className='grow text-xs'>Created </span>
                           <span>0</span>
                        </div>
                        <div className='flex items-center   '>
                            <span className='grow text-xs'>Fine-tune/Template</span>
                           <span>0</span>
                        </div>

                    </div>


                    <div className='p-4 rounded-xl border border-[#494949] '>
                        <div className='mb-4'>
                            <p>Total tasks</p>
                        </div>
                       
                        <div className='flex items-center mb-6 pb-4 border-b-2 border-[#494949]'>
                            <span className='grow text-2xl font-bold'>0</span>
                            <Image src={ TaskIcon} alt='' />
                        </div>
                        <div className='flex items-center mb-4  '>
                            <span className='grow text-xs'>Completed </span>
                           <span>0</span>
                        </div>
                        <div className='flex items-center   '>
                            <span className='grow text-xs'>Pending</span>
                           <span>0</span>
                        </div>

                    </div>


                    <div className='p-4 rounded-xl border border-[#494949] '>
                        <div className='mb-4'>
                            <p>Total rewards</p>
                        </div>
                       
                        <div className='flex items-center mb-6 pb-4 border-b-2 border-[#494949]'>
                            <span className='grow text-2xl font-bold'>0</span>
                            <Image src={ TaskIcon} alt='' />
                        </div>
                        <div className='flex items-center mb-4  '>
                            <span className='grow text-xs'>Personal </span>
                           <span>0</span>
                        </div>
                        <div className='flex items-center   '>
                            <span className='grow text-xs'>General</span>
                           <span>0</span>
                        </div>

                    </div>


                </div>

                <div className='my-10 flex gap-5 '>
                    <div className='w-[70%] rounded-xl border border-[#494949] h-[481px] px-8 py-8'>

                    </div>
                    <div className='max-h-[4]'>

                    </div>

                </div>
            </div>
        </DashLayout>
    );
}

