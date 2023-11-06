'use client'
import Link from 'next/link'
import React from 'react'
import flower from "public/flower.png"
import Image from 'next/image'
import {PiCloudArrowUp} from "react-icons/pi"
interface IProps {
  download: () => void
  setPage: (page: number | null) => void
  cid: string
}

export default function ModelDownload({ download, setPage, cid }: IProps) {
  return (
    <div className="w-full h-full px-5 py-3 relative flex flex-col items-center justify-center ">
      <div className="h-[20%] mt-4">
        <h1 className="text-center text-3xl font-logirentBold">
          Model Is Ready For Download
        </h1>
        <p className="font-archivo text-xs font-light text-center text-primary_6">{`Your AI model is now ready for download! We're excited to see what you'll create with it.`}</p>
      </div>

      <div className="flex  gap-8 items-center my-6 h-[20%]">
        <Image src={flower} alt="flower" className='h-full object-contain' />

        <button className="border-2 border-[#2B2B2B] border-dashed flex flex-col py-3 px-2 text-[#DADADA] gap-3 items-center rounded-lg">
          <PiCloudArrowUp size={25} />

          <span className='text-sm'>Change picture</span>
        </button>
      </div>

      <div className="flex flex-col items-center justify-start w-[80%] md:w-[60%]  h-[80%] gap-3">
        <div className="h-[25%] border border-primary_8 rounded-2xl w-full  text-sm flex justify-between items-center font-archivo px-4 py-4">
          <p className="">Face detection</p>
          <p className="text-primary_8">size 152MB</p>
        </div>
        <div className="w-full h-[20%] flex flex-col gap-2">
          <div className="text-sm font-semibold font-archivo w-full h-[10%] px-2 mb-2">Description</div>
          <div className="h-full border border-primary_8 rounded-2xl w-full  text-sm flex justify-between items-center font-archivo px-4">
            <textarea
              className="w-full h-full rounded-2xl bg-transparent focus:ring-0 outline-none p-2 resize-none py-6 overflow-y-hidden"
              
              placeholder="what is the model about..."
            />
          </div>
        </div>
        <div className="h-[15%] rounded-2xl w-full  text-sm flex justify-between items-center font-archivo mt-4 ">
          <button
            onClick={() => setPage(1)}
            className="border border-primary_8 text-primary_1 font-semibold font-primaryArchivo text-sm h-full w-[30%] cursor-pointer rounded-2xl">
            Train again
          </button>

          <button className=" text-primary_1 font-semibold font-primaryArchivo text-base h-full w-[30%] cursor-pointer rounded-2xl ">
            <Link
              href={`https://dweb.link/ipfs/${cid}`}
              target="_blank"
              className="flex items-center justify-center h-full w-full">
              Share model
            </Link>
          </button>
        </div>
        <button
          // onClick={() => download()}
          className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-sm w-full cursor-pointer rounded-2xl py-2.5 mt-2">
          <Link
            href={`https://dweb.link/ipfs/${cid}`}
            target="_blank"
            className="flex items-center justify-center h-full w-full">
            Download model
          </Link>
        </button>
      </div>
    </div>
  )
}
