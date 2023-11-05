'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { DashLayout } from '../dashLayout'
import Link from 'next/link'
import { GoFilter } from 'react-icons/go'
import { GoDownload } from 'react-icons/go'
import { GoSortAsc } from 'react-icons/go'
import { BiLike } from 'react-icons/bi'

export default function Page() {
  const pathname = usePathname()
  return (
    <DashLayout>
      <div className="h-full px-10 pt-6 flex flex-col gap-y-10 text-white">
        <div className=" h-[20%] ">
          <div className="px-4 h-[20%] flex justify-between  items-center max-w-[209px] text-xs rounded-t-2xl bg-primary_11">
            <Link href="">
              <span>Personal</span>
            </Link>
            <Link href="">
              <span className="text-primary_8">General</span>
            </Link>
          </div>
          <div className="grid-cols-3 h-[50%] grid border items-center border-primary_9 px-4 py-4 ">
            <div>
              <span className="font-logirentRegular text-2xl">Models 3</span>
            </div>
            <div className="rounded-full  max-h-[50px] w-[80%] max-w-[500px]  bg-primary_11 relative text-primary_8 pb-1">
              <div className="absolute top-0 left-5 h-full flex items-center">
                <GoFilter size={20} />
              </div>
              <input
                placeholder="Filter by name"
                className="w-full pl-12 h-full rounded-full bg-transparent outline-none focus:ring-0 text-primary_1 text-sm font-archivo"
              />
            </div>

            <div className="flex gap-20 justify-end">
              <div className="flex items-center gap-1">
                <GoDownload width={18} height={15} />
                <span className="text-xs">Sort</span>
              </div>
              <div>
                <GoSortAsc width={18} height={15} />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-xs h-[30%]  border-primary_9 border flex justify-between max-w-[464px]  rounded-b-2xl ]">
            <Link href="">
              <span>Modal</span>
            </Link>
            <Link href="">
              <span className="text-primary_8">Datasets</span>
            </Link>
            <Link href="">
              <span className="text-primary_8">Pre-trained models</span>
            </Link>
            <Link href="">
              <span className="text-primary_8">Templates</span>
            </Link>
          </div>
        </div>
        <div className="flex gap-3  h-[80%] text-white text-xs  overflow-auto">
          <div className="bg-primary_13 bg-opacity-40 px-4 py-5 h-[50%] rounded-lg  w-[15%]">
            <span>Multimodal</span>
            <div className="mt-3">
              <span className="text-xs border border-primary_11 px-3 mt-4 py-1 rounded-full">
                Feature Extraction
              </span>
            </div>
          </div>

          <div className=" w-[85%]  h-full  ">
            <div className="w-full h-[80%] flex flex-col gap-6  overflow-y-scroll">
              <div className=" border border-primary_9 flex px-5 py-3 items-center rounded-xl  h-[170px] min-h-[170px]">
                <div className="w-[80%] h-full">
                  <div className=" flex h-[25%] items-start ">
                    <span className="bg-primary_11 rounded-full text-primary_8 py-1 px-3">
                      Text Generation
                    </span>
                  </div>
                  <div className="h-[20%]">
                    <span className="text-lg ">Model name</span>
                  </div>
                  <div className="flex items-center h-[40%]">
                    <p className="text-xs">
                      Identifies a variety of concepts in images and video including
                      objects, themes, and more.{' '}
                    </p>
                  </div>
                  <div className=" h-[15%] text-xs text-primary_8 flex gap-4">
                    <div>
                      <span>Updated Sep, 12 2023</span>
                    </div>
                    <div className="flex">
                      <GoDownload />
                      <span>12k</span>
                    </div>
                    <div className="flex">
                      <BiLike />
                      <span>127</span>
                    </div>
                  </div>
                </div>

                <div className="w-[20%] h-full bg-primary_11 "></div>
              </div>
              <div className=" border border-primary_9 flex px-5 py-3 items-center rounded-xl  h-[170px] min-h-[170px]">
                <div className="w-[80%] h-full">
                  <div className=" flex h-[25%] items-start ">
                    <span className="bg-primary_11 rounded-full text-primary_8 py-1 px-3">
                      Text Generation
                    </span>
                  </div>
                  <div className="h-[20%]">
                    <span className="text-lg ">Model name</span>
                  </div>
                  <div className="flex items-center h-[40%]">
                    <p className="text-xs">
                      Identifies a variety of concepts in images and video including
                      objects, themes, and more.{' '}
                    </p>
                  </div>
                  <div className=" h-[15%] text-xs text-primary_8 flex gap-4">
                    <div>
                      <span>Updated Sep, 12 2023</span>
                    </div>
                    <div className="flex">
                      <GoDownload />
                      <span>12k</span>
                    </div>
                    <div className="flex">
                      <BiLike />
                      <span>127</span>
                    </div>
                  </div>
                </div>

                <div className="w-[20%] h-full bg-primary_11 "></div>
              </div>
            </div>

            <div className="flex h-[20%] justify-center text-primary_7  items-center ">
              <div>
                <button className="w-24 bg-primary_11 py-2 rounded-full">Next</button>
              </div>
              <div className=" ">
                <span className="p-2  border">1</span>
              </div>
              <div>
                <button className="w-24 bg-primary_11 py-2 rounded-full">Previous</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashLayout>
  )
}
