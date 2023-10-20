'use client'
import React from 'react'
import rocket from '@public/rocket.png'
import Image from 'next/image'

interface IProps {
  setPage: (page: number | null) => void
}

interface IFile {
  file: {
    name: string
  }
  path: string
}

export default function ModelTraining({ setPage }: IProps) {
  return (
    <div className="w-full h-full px-5 py-3 relative flex items-end justify-center">
      <div className=" h-[40%] w-[40%] flex items-end justify-center">
        <Image
          src={rocket}
          alt="decenter image"
          className="grayscale max-h-[100%] max-w-[100%]"
          width={600}
          height={600}
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className="absolute top-0 inset-0 leading-8 pt-8 ">
        <h1 className="text-center text-3xl font-logirentBold">
          Model Is now Being TraIned
        </h1>
        <p className="font-archivo text-xs font-light text-center text-primary_6">
          Training takes less than 3 minutes, please wait...
        </p>
      </div>
    </div>
  )
}
