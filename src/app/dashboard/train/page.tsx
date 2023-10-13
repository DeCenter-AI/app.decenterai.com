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
    return (
        <DashLayout >
            {!page && <TrainBase setPage={setPage} />}
            {page == 1 && <NewModel setPage={setPage} />}


            {/* <TransactionAuthorization /> */}
            {/* <TransactionProcessing /> */}
            {/* <TransactionCompleted /> */}
        </DashLayout>
    );
}


