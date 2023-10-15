'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import { DashLayout } from '../dashLayout';
import Link from 'next/link';
import { GoFilter } from 'react-icons/go';
import { GoDownload } from 'react-icons/go';
import { GoSortAsc } from 'react-icons/go';
import { BiLike } from 'react-icons/bi';


export default function Page() {
    const pathname = usePathname();
    return (
        <DashLayout >
            <div className='h-[100%]    px-10 py-6 text-white'>
                <div className='mb-10 '>
                    <div className='px-4 py-2 flex justify-between max-w-[209px] text-xs rounded-t-2xl bg-[#232323]'>
                        <Link href=''>
                            <span>Personal</span>
                        </Link>
                        <Link href=''>
                            <span>General</span>
                        </Link>

                    </div>
                    <div className='grid-cols-3 grid border items-center border-[#494949] px-4 py-4 '>
                        <div>
                            <span className='font-logirentRegular text-2xl'>Models 3</span>
                        </div>
                        <div className='rounded-full  max-h-[50px] w-[80%] max-w-[500px]  bg-primary_11 relative text-primary_8 pb-1'>
                            <div className='absolute top-0 left-5 h-full flex items-center'>
                                <GoFilter size={20} />
                            </div>
                            <input placeholder='Filter by name' className='w-full pl-12 h-full rounded-full bg-transparent outline-none focus:ring-0 text-primary_1 text-sm font-archivo' />
                        </div>

                        <div className='flex gap-20 justify-end'>
                            <div className='flex items-center gap-1'>
                                <GoDownload width={18} height={15} />
                                <span className='text-xs'>Sort</span>

                            </div>
                            <div>
                                <GoSortAsc width={18} height={15} />
                            </div>

                        </div>
                    </div>
                    <div className='px-4 py-3 text-xs  border-[#494949] border flex justify-between max-w-[464px]  rounded-b-2xl ]'>
                        <Link href=''>
                            <span>Personal</span>
                        </Link>
                        <Link href=''>
                            <span>Datasets</span>
                        </Link>
                        <Link href=''>
                            <span>Pre-trained models</span>
                        </Link>
                        <Link href=''>
                            <span>Templates</span>
                        </Link>

                    </div>


                </div>


                <div className=' '>
                    <div className='flex gap-3 max-h-[80%] text-white mb-4 text-xs  '>
                        <div className='bg-[#05050538] px-4 py-5 h-[242px] rounded-lg w-[20%] '>
                            <span>Multimodal</span>
                            <div className='mt-3'>
                                <span className='text-xs border border-[#232323] px-3 mt-4 py-1 rounded-full'>Feature Extraction</span>
                            </div>
                        </div>

                        <div className=' w-[80%] h-[100%] overflow-y-scroll'>
                       
                                <div className=' border border-[#494949] mb-4 flex px-5 py-3 rounded-xl  h-[150px]'>
                                    <div className='mt-2 grow'>
                                        <div>
                                            <span className='bg-[#232323] rounded-full text-[#5D5D5D] py-2 px-3'>Text Generation</span>
                                        </div>
                                        <div className='mt-4'>
                                            <span className='text-lg '>Model name</span>
                                        </div>
                                        <div className='mt-2'>
                                            <span className='text-xs'>Identifies a variety of concepts in images and video including objects, themes, and more. </span>
                                        </div>
                                        <div className='mt-4 text-xs text-[#5D5D5D] flex gap-4'>
                                            <div>
                                                <span>Updated Sep, 12 2023</span>
                                            </div>
                                            <div className='flex'>
                                                <GoDownload />
                                                <span>12k</span>
                                            </div>
                                            <div className='flex'>
                                                <BiLike />
                                                <span>127</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='h-[108px] w-[115px] bg-[#232323] mt-2'>

                                    </div>




                                </div>

                                <div className=' border border-[#494949] mb-4 flex px-5 py-3 rounded-xl  h-[150px]'>
                                    <div className='mt-2 grow'>
                                        <div>
                                            <span className='bg-[#232323] rounded-full text-[#5D5D5D] py-2 px-3'>Text Generation</span>
                                        </div>
                                        <div className='mt-4'>
                                            <span className='text-lg '>Model name</span>
                                        </div>
                                        <div className='mt-2'>
                                            <span className='text-xs'>Identifies a variety of concepts in images and video including objects, themes, and more. </span>
                                        </div>
                                        <div className='mt-4 text-xs text-[#5D5D5D] flex gap-4'>
                                            <div>
                                                <span>Updated Sep, 12 2023</span>
                                            </div>
                                            <div className='flex'>
                                                <GoDownload />
                                                <span>12k</span>
                                            </div>
                                            <div className='flex'>
                                                <BiLike />
                                                <span>127</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='h-[108px] w-[115px] bg-[#232323] mt-2'>

                                    </div>




                                </div>

                                

                         
                        </div>
                 

                    </div>



                </div>





             

            </div>

        </DashLayout>
    );
}

