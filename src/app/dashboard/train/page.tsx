'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { DashLayout } from '../dashLayout';
import TransactionAuthorization from './modals/TransactionAuthorization';
import TransactionProcessing from './modals/TransactionProcessing';
import TransactionCompleted from './modals/TransactionCompleted';
import TrainBase from './components/TrainBase';
import NewModel from './components/NewModel';



export default function Page() {
    const [page, setPage] = useState<number | null>(null)
    const [modal, setModal] = useState<number | null>(null)
    const [train, setTrain] = useState<boolean>(false)
    return (
        <DashLayout >
            {!page && <TrainBase setPage={setPage} />}
            {page == 1 && <NewModel setPage={setPage} setModal={setModal} train={train} setTrain={setTrain} />}


            {modal === 0 && <TransactionAuthorization setModal={setModal} setTrain={setTrain} />}
            {modal === 1 && <TransactionProcessing />}
            {modal === 2 && < TransactionCompleted setModal={setModal} />}
        </DashLayout>
    );
}


