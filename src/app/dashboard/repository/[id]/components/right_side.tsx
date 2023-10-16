import React from 'react'
import img from '../../../../../../public/Rectangle 75.png'
import Image from 'next/image'
import Modal from './modal'
function RightSide() {
  return (
    <div className=' h-[100%] max-h-screen  overflow-y-scroll px-4 '>
        <div className='mb-4'>
            <Image className=' justify-center grid' src={img} alt='' />
        </div>
        <div className='px-4 py-2 mb-4 text-center bg-primary_11 rounded-full'>
            <span className='text-xs'>Edit Model</span>
        </div>
        <div className='px-4 py-2 mb-4  bg-primary_11 rounded-2xl'>
            <ul>
            <li className='text-xs px-3 py-3 hover:bg-black hover:rounded-full'>Model</li>
            <li className='text-xs text-[#5D5D5D]  px-3  py-3 hover:bg-black hover:rounded-full'>Description</li>
            <li className='text-xs text-[#5D5D5D]  px-3  py-3 hover:bg-black hover:rounded-full'>Version history</li>
            <li className='text-xs text-[#5D5D5D]  px-3  py-3 hover:bg-black hover:rounded-full'>Datasety</li>
            </ul>
        </div>
        <div className='px-4 py-2 mb-4  bg-primary_11 rounded-2xl'>
            <ul>
            <li className='text-xs px-3 text-[#5D5D5D] py-3 hover:bg-black hover:rounded-full'>Created Sep, 12 2023</li>
            <li className='text-xs  px-3 text-[#5D5D5D]  py-3 hover:bg-black hover:rounded-full'>Downloads</li>
           
            </ul>
        </div>
    </div>
  )
}

export default RightSide