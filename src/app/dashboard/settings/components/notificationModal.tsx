import React, { useState } from 'react';

function NotificationModal({ show, onClose }) {
  // Define the state and logic for the Notification Modal
  const [notificationContent, setNotificationContent] = useState('');

  return (
    <div className={`modal ${show ? 'block' : 'hidden'}`}>
      <div className="bg-primary_13 opacity-50 backdrop-blur-md fixed inset-0 "></div>
      <div className="justify-center items-center flex overflow-x-hidden mt-10 text-white overflow-y-auto fixed inset-0 z-60 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-[520px] z-50">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-primary_11 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 rounded-t-3xl">
              <h3 className="text-2xl font-semibold font-logirentBold">
                Notification
              </h3>
            </div>
            {/*body*/}
            <div className="relative px-6 flex-auto">
              {notificationContent}
              <div className="pb-4 border-b-2 mb-6 border-primary_9">
                <span className="text-xs text-primary_7">
                  We may still send you important notifications about your account outside of your notification settings.
                </span>
              </div>
              <div className="flex justify-between">
                <div>
                  <h4>Tasks</h4>
                  <span className="text-xs text-primary_7">
                    These are notifications for when someone assigns you a task.
                  </span>
                </div>
                <div></div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center gap-4 justify-end p-6">
              <button
                className="background-transparent border border-primary_9 rounded-xl font-bold uppercase px-6 py-4 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className="bg-primary_9 text-white text-sm px-6 py-4 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
  );
}

export default NotificationModal;
