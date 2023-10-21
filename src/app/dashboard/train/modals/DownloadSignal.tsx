import React from 'react'
import { FiLoader } from 'react-icons/fi'
import { FadeLoader } from 'react-spinners'

const DownloadSignal = () => {
  return (
    <div className="fixed inset-0 bg-primary_13 bg-opacity-80 flex items-center justify-center">
      <div className="w-[25%] h-[30%] min-h-[200px] bg-primary_12 rounded-xl p-4">
        <div className="h-[50%] text-primary_7 flex items-center justify-center">
          {/* <FiLoader size={150} /> */}
          <FadeLoader color="#8f8f8f" />
        </div>
        <div className="h-[50%] text-primary_7 flex flex-col items-center justify-start pt-6 gap-6">
          <h2 className="font-logirentRegular text-primary_1">Model DownloadIng...</h2>
        </div>
      </div>
    </div>
  )
}

export default DownloadSignal
