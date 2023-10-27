'use client'
import React, { useEffect, useState } from 'react'
import { DashLayout } from '../dashLayout';
import { BsPerson } from 'react-icons/bs'
import Link from 'next/link';
import { GoBell } from 'react-icons/go'
import NotificationModal from './components/notificationModal';

import { BiWallet, BiLock, BiLogOut } from 'react-icons/bi'
import SecurityModal from './components/securityModal';
export default function Modal() {
  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);

const openNotificationModal = () => {
  setShowNotificationModal(true);
};

const closeNotificationModal = () => {
  setShowNotificationModal(false);
};
const openSecurityModal = () => {
  setShowSecurityModal(true);
};

const closeSecurityModal = () => {
  setShowSecurityModal(false);
};

  return (
    <>
      <DashLayout>
        <div className="h-full w-full px-4 flex gap-5 pt-10 text-white">
          <div className="w-[80%]">
            <button className="rounded-2xl border mb-4 w-full gap-2 items-cente border-primary_9 flex px-4 py-5" >
              <div className="text-primary_8">
                <BsPerson size={24} />
              </div>
              <span>Profile </span>
            </button>
            <button className="rounded-2xl w-full border mb-4 gap-2 items-cente border-primary_9 flex px-4 py-5" type="button"
             onClick={openSecurityModal}
             >
              <div className="text-primary_8">
                <BiLock size={24} />
              </div>
              <span>Security </span>
            </button>
            <button className="rounded-2xl w-full border mb-4 gap-2 items-cente border-primary_9 flex px-4 py-5">
              <div className="text-primary_8">
                <BiWallet size={24} />
              </div>
              <span>Wallet connect</span>
            </button>
            <button className="rounded-2xl w-full border mb-4 gap-2 items-center border-primary_9 flex px-4 py-5"  onClick={openNotificationModal}>
              <div className="text-primary_8">
                <GoBell size={24} />
              </div>

              <span>Notification</span>
            </button>
          

          </div>
          <div className="w-[20%]">
            <button className="flex bg-primary_9 items-center gap-3 text-white  w-full justify-center py-2 rounded-xl">
              <div className="">
                <BiLogOut size={18} />
              </div>
              <span className="text-xs">Log Out</span>
            </button>
          </div>

        </div>
        <NotificationModal show={showNotificationModal} onClose={closeNotificationModal} />
        <SecurityModal show={showSecurityModal} onClose={closeSecurityModal}  />
       


      
      </DashLayout>


    </>
  );
}


