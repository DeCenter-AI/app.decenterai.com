import React from 'react'
import Image from 'next/image'
import Emptyimg from '@public/magnify.png'
export default function EmptyRepository() {
  return (
    <div className='flex flex-col justify-center items-center'>

    <div className='mb-2'>
    <Image src={Emptyimg} className='grayscale' height={136} width={171.67} alt='' />
    </div>
    <span className="text-center text-xs ">No models created yet.</span>
  </div>
  )
}
