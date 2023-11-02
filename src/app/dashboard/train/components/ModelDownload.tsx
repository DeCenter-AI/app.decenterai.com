'use client'
import Link from 'next/link'
import React from 'react'

interface IProps {
  download: () => void
  setPage: (page: number | null) => void
  cid: string
}

export default function ModelDownload({ download, setPage, cid }: IProps) {
  return (
    <div className="w-full h-full px-5 py-3 relative flex flex-col items-center justify-center ">
      <div className="h-[20%]">
        <h1 className="text-center text-3xl font-logirentBold">
          Model Is Ready For Download
        </h1>
        <p className="font-archivo text-xs font-light text-center text-primary_6">{`Your AI model is now ready for download! We're excited to see what you'll create with it.`}</p>
      </div>

      <div className="flex flex-col items-center justify-start w-[80%] md:w-[60%]  h-[80%] gap-3">
        <div className="h-[25%] border border-primary_8 rounded-2xl w-full  text-sm flex justify-between items-center font-archivo px-4">
          <p className="">Face detection</p>
          <p className="text-primary_8">size 152MB</p>
        </div>
        <div className="w-full h-[20%] flex flex-col gap-2">
          <div className="text-xs font-archivo w-full h-[10%]">Description</div>
          <div className="h-[80%] border border-primary_8 rounded-2xl w-full  text-sm flex justify-between items-center font-archivo px-4">
            <textarea
              className="w-full h-full rounded-2xl bg-transparent focus:ring-0 outline-none p-2 resize-none"
              placeholder="what is the model about..."
            />
          </div>
        </div>
        <div className="h-[10%] rounded-2xl w-full  text-sm flex justify-between items-center font-archivo ">
          <button
            onClick={() => setPage(1)}
            className="border border-primary_8 text-primary_1 font-semibold font-primaryArchivo text-sm h-full w-[30%] cursor-pointer rounded-2xl"
          >
            Train again
          </button>

          <button
            // onClick={() => download()}
            className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-sm h-full w-[30%] cursor-pointer rounded-2xl"
          >
            <Link
              href={`https://dweb.link/ipfs/${cid}`}
              target="_blank"
              className="flex items-center justify-center h-full w-full"
            >
              {' '}
              Download Model
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
