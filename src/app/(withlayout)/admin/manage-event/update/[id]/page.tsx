import EventUpdate from '@/components/Dashboard/Admin/Manage-Event/EventUpdate'
import { IDProps } from '@/types'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Event Update`,
  description: 'Best Event Management Website',
}

function page({params}: IDProps) {
  return (
    <div>
        <EventUpdate params={params}/>
    </div>
  )
}

export default page