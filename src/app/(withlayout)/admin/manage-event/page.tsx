import ManageEvent from '@/components/Dashboard/Admin/Manage-Event/ManageEvent'
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Manage Event`,
  description: 'Best Event Management Website',
}

function EventPage() {
   
  return (
    <div>
       <ManageEvent/>
    </div>
  )
}

export default EventPage