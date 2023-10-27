import UpdateLocation from '@/components/Dashboard/Admin/Manage-Location/UpdateLocation'
import { IDProps } from '@/types'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Update Location`,
    description: 'Best Event Management Website',
  }

function page({params}: IDProps) {
  return (
    <div>
        <UpdateLocation id={params}/>
    </div>
  )
}

export default page