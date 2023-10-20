import React from 'react'
import {FaRegCircleCheck} from "react-icons/fa6"

interface IProps {

    setModal: (page: number | null) => void

}

const TransactionCompleted = ({ setModal }: IProps) => {
    return (
        <div className='fixed inset-0 bg-primary_13 bg-opacity-80 flex items-center justify-center'>
            <div className='w-[25%] h-[50%] bg-primary_12 rounded-xl p-4'>
                <div className='h-[30%] text-primary_1 flex items-center justify-center'>
                    <FaRegCircleCheck size={80} />
                </div>
                <div className='h-[70%] text-primary_7 flex flex-col items-center justify-start pt-6 gap-6'>
                    <h2 className='font-logirentRegular text-primary_1'>TransactIon Successful</h2>
                    <p className='text-center'>Your transaction has been submitted</p>
                    <div className='flex justify-center'>
                        <button onClick={() => {
                            setModal(3)
                            setModal(null)
                        }} className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-sm  py-2 px-8  cursor-pointer rounded-full">
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionCompleted
