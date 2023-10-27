import ManageLocation from '@/components/Dashboard/Admin/Manage-Location/ManageLocation'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Manage Location`,
    description: 'Best Event Management Website',
  }

function page() {
  return (
    <div>
        <ManageLocation/>
    </div>
  )
}

export default page