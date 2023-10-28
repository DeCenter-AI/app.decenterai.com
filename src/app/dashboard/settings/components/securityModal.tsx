import React, { useState } from 'react'

function SecurityModal({ show, onClose }) {
  // Define the state and logic for the Notification Modal
  const [securityContent, setSecurityContent] = useState('')

  return (
    <div className={`modal ${show ? 'block' : 'hidden'}`}>
      <div className="bg-primary_13 opacity-50 backdrop-blur-md fixed inset-0 "></div>
      <div className="justify-center items-center flex overflow-x-hidden mt-10 text-white overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-[520px]">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-primary_11 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5  rounded-t-3xl">
              <h3 className="text-2xl font-semibold font-logirentBold">
                Change password
              </h3>
            </div>
            {/*body*/}
            <div className="relative px-6  flex-auto">
              {securityContent}
              <form className="mt-6">
                <div className="mb-6 pb-4  border-b-2 border-primary_9">
                  <label
                    htmlFor="currentPassword"
                    className="block text-sm font-semibold "
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your secure password here"
                    className="block w-full px-4 py-4 mt-2 text-primary_7  bg-primary_11 text-xs outline-none  border rounded-xl border-primary_9 "
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="new-password" className="block text-sm font-semibold ">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password here"
                    className="block w-full px-4 py-4 mt-2 text-primary_7  bg-primary_11 text-xs outline-none  border rounded-xl border-primary_9 "
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="retype-password"
                    className="block text-sm font-semibold "
                  >
                    ReType Password
                  </label>
                  <input
                    type="password"
                    placeholder="Repeat password "
                    className="block w-full px-4 py-4 mt-2 textprimary_7  bg-primary_11 text-xs  outline-none border rounded-xl border-primary_9 "
                  />
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center gap-4 justify-end p-6  ">
              <button
                className=" background-transparent  border border-primary_9 rounded-xl font-bold uppercase px-6 py-4 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="bg-primary_9 text-white    text-sm px-6 py-4 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecurityModal
