import CreateEvent from '@/components/Dashboard/Admin/Manage-Event/CreateEvent';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Create Event`,
  description: 'Best Event Management Website',
}

function EventCreatePage() {
   
  return (
    <div>
       <CreateEvent/>
    </div>
  )
}

export default EventCreatePage;