import React from 'react'
import { FiLoader } from "react-icons/fi"
import { FadeLoader } from "react-spinners";

const TransactionProcessing = () => {
    return (
        <div className='fixed inset-0 bg-primary_13 bg-opacity-80 flex items-center justify-center'>
            <div className='w-[25%] h-[50%] bg-primary_12 rounded-xl p-4'>
                <div className='h-[50%] text-primary_7 flex items-center justify-center'>
                    {/* <FiLoader size={150} /> */}
                    <FadeLoader color='#8f8f8f' />
                </div>
                <div className='h-[50%] text-primary_7 flex flex-col items-center justify-start pt-6 gap-6'>
                    <h2 className='font-logirentRegular text-primary_1'>TransactIon ProcessIng...</h2>
                    <p className='text-center'>Kindly wait as we process your transaction</p>
                </div>
            </div>
        </div>
    )
}

export default TransactionProcessing