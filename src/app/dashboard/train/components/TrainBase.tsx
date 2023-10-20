import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

interface IProps {
  setPage: (page: number | null) => void
}

const TrainBase = ({ setPage }: IProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center px-10 gap-10">
      <div className="w-[30%] h-[60%] border border-primary_8 rounded-xl p-10 flex flex-col items-center justify-center gap-10 text-primary_8">
        <AiOutlinePlus size={50} />
        <h3 className="font-logirentRegular text-md text-primary_1">New-model</h3>
        <p className="font-archivo text-primary_8 text-lg text-center">
          Create new appropriate model to suit your specific target use case.
        </p>
        <button
          onClick={() => setPage(1)}
          className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-sm py-3 w-full cursor-pointer rounded-xl"
        >
          Create Model
        </button>
      </div>
      {/* <div className='w-[30%] h-[60%] border bg-primary_10 border-primary_8 rounded-xl p-10 flex flex-col items-center justify-center gap-10 text-primary_8'>
                <PiGearFine size={50} />
                <h3 className='font-logirentRegular text-md text-primary_1'>FIne-tune</h3>
                <p className='font-archivo text-primary_8 text-lg text-center'>Edit existing applications to align with your  objectives.</p>
                <button onClick={() => setPage(2)} disabled={true} className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-sm py-3 w-full  rounded-xl">
                    Fine Tune
                </button>
            </div>
            <div className='w-[30%] h-[60%] border border-primary_8 rounded-xl p-10 flex flex-col items-center justify-center gap-10 text-primary_8'>
                <TbTemplate size={50} />
                <h3 className='font-logirentRegular text-md text-primary_1'>Template</h3>
                <p className='font-archivo text-primary_8 text-lg text-center'>Explore our collection and choose the best-fit for your goals.</p>
                <button onClick={() => setPage(3)} className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-sm py-3 w-full cursor-pointer rounded-xl">
                    Use Template
                </button>
            </div> */}
    </div>
  )
}

export default TrainBase
