import CreateAdmin from '@/components/Dashboard/Super-Admin/CreateAdmin/CreateAdmin'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Create Admin`,
  description: 'Best Event Management Website',
}

function page() {

  return (
    <div>
        <CreateAdmin/>
    </div>
  )
}

export default page