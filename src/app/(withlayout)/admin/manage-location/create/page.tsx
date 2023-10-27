import CreateLocation from '@/components/Dashboard/Admin/Manage-Location/CreateLocation'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Create Location`,
    description: 'Best Event Management Website',
  }

function page() {
  return (
    <div>
        <CreateLocation/>
    </div>
  )
}

export default page