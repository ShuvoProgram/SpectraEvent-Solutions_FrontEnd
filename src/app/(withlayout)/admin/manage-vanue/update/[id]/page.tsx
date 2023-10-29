import UpdateVanue from '@/components/Dashboard/Admin/Manage-Vanue/UpdateVanue'
import { IDProps } from '@/types'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Update Vanue`,
    description: 'Best Event Management Website',
  }

function page({params}: IDProps) {
  return (
    <div>
        <UpdateVanue id={params}/>
    </div>
  )
}

export default page