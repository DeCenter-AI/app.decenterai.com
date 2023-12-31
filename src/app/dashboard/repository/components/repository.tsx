import useModelStore, { IModel } from '@/state/modelStore'
import React from 'react'
import { BiLike } from 'react-icons/bi'
import { GoDownload } from 'react-icons/go'

export default function Repository() {
  const { models } = useModelStore()

  return (
    <div>

      {/* extract the values of the object */}
      {models && Object.values(models).map(model => (
        <div
          key={model.id}
          className=" border border-primary_9 flex px-5 mb-5 py-3 items-center rounded-xl  h-[170px] min-h-[170px]"
        >
          <div className="w-[80%] h-full">
            <div className=" flex h-[25%] items-start ">
              <span className="bg-primary_11 rounded-full text-primary_8 py-1 px-3">
                {'Text Generation'}
              </span>
            </div>
            <div className="h-[20%]">
              <span className="text-lg ">{model.name}</span>
            </div>
            <div className="flex items-center h-[40%]">
              <p className="text-xs">{model.description} </p>
            </div>
            <div className=" h-[15%] text-xs text-primary_8 flex gap-4">
              <div>
                <span>Updated {"12 2023"}</span>
              </div>
              <div className="flex">
                <GoDownload />
                <span>{'12k'}</span>
              </div>
              <div className="flex">
                <BiLike />
                <span>{'50'}</span>
              </div>
            </div>
          </div>

          <div className="w-[20%] h-full bg-primary_11 "></div>
        </div>
      ))}

    </div>
  )
}
