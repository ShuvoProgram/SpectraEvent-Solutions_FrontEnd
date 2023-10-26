import ManageBlog from '@/components/Dashboard/Admin/Manage-Blog/ManageBlog';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Manage Blog`,
  description: 'Best Event Management Website',
}

function page() {
  return (
    <div>
        <ManageBlog/>
    </div>
  )
}

export default page