import ManageVanue from '@/components/Dashboard/Admin/Manage-Vanue/ManageVanue'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Manage Vanue`,
    description: 'Best Event Management Website',
  }

function page() {
  return (
    <div>
        <ManageVanue/>
    </div>
  )
}

export default page