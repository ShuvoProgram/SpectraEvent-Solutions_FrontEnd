import CreateVanue from '@/components/Dashboard/Admin/Manage-Vanue/CreateVanue'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Create Vanue`,
    description: 'Best Event Management Website',
  }

function page() {
  return (
    <div>
        <CreateVanue/>
    </div>
  )
}

export default page