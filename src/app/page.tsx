'use client'
import {redirect} from 'next/navigation'
import {useEffect} from 'react'

export default function Home() {
  useEffect(() => {
    redirect('/explore')
  })
  return <main className="bg-primary_13"></main>
}
