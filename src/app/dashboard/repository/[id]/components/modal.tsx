<<<<<<< HEAD
"use client"
import {useSearchParams} from 'next/navigation'
import {useRef , useEffect} from 'react'

type Props = {
    title : string,
    onClose: () => void,
    onOk: () => void,
    children : React.ReactNode,

=======
'use client'
import { useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'

type Props = {
  title: string
  onClose: () => void
  onOk: () => void
  children: React.ReactNode
>>>>>>> 9c8b25d55b98f57135e27486c81a332aca219569
}

import React from 'react'

<<<<<<< HEAD
export default function Modal({title, onClose, onOk, children}: Props) {

    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get('showDialog')

    useEffect(()=>{
        if(showDialog === 'y'){
            dialogRef.current?.showModal()
        }else{
            dialogRef.current?.close()
        }
    }, [showDialog])

    const closeDialog = () =>{
        dialogRef.current?.close()
        onClose() 
    }

    const clickOk =()=>{
        onOk()
        closeDialog()
    }

    const dialog: JSX.Element | null = showDialog === 'y'
    ?(
        <dialog ref={dialogRef} className='fixed top-50 left-50 -translate-x-52 translate-y-52 z-10 backdrop:bg-gray-800/50'>
             <div>
                 <div>
                    <h1>{title}</h1> 
                    <button onClick={closeDialog}>X</button>
                 </div>
                 <div>
                    {children}
                    <div>
                        <button onClick={clickOk}>Ok</button>
                    </div>
                 </div>
             </div>
        </dialog>
    ) : null

     
=======
export default function Modal({ title, onClose, onOk, children }: Props) {
  const searchParams = useSearchParams()
  const dialogRef = useRef<null | HTMLDialogElement>(null)
  const showDialog = searchParams.get('showDialog')

  useEffect(() => {
    if (showDialog === 'y') {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [showDialog])

  const closeDialog = () => {
    dialogRef.current?.close()
    onClose()
  }

  const clickOk = () => {
    onOk()
    closeDialog()
  }

  const dialog: JSX.Element | null =
    showDialog === 'y' ? (
      <dialog
        ref={dialogRef}
        className="fixed top-50 left-50 -translate-x-52 translate-y-52 z-10 backdrop:bg-gray-800/50"
      >
        <div>
          <div>
            <h1>{title}</h1>
            <button onClick={closeDialog}>X</button>
          </div>
          <div>
            {children}
            <div>
              <button onClick={clickOk}>Ok</button>
            </div>
          </div>
        </div>
      </dialog>
    ) : null

>>>>>>> 9c8b25d55b98f57135e27486c81a332aca219569
  return dialog
}
