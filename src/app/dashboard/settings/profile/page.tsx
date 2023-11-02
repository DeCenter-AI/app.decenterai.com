'use client'

import { useRouter } from 'next/navigation'
import { DashLayout } from '../../dashLayout'
import {PiCaretLeft} from "react-icons/pi"
export default function Page() {
  const router = useRouter()

  return (
    <DashLayout>
      <section>
        <div className='flex gap-4  items-center'>
          <button
            type="button"
            onClick={() => router.push('/dashboard/settings/profile')} className='flex gap-2 items-center'>
            <PiCaretLeft/>
            <span>Back</span>
          </button>
        </div>
      </section>
    </DashLayout>
  )
}
