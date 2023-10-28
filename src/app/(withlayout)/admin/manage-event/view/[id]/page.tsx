import EventDetails from '@/components/Dashboard/Admin/Manage-Event/EventDetails';
import { IDProps } from '@/types';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Event Details`,
  description: 'Best Event Management Website',
}

function page({params}: IDProps) {
  return (
    <div>
        <EventDetails params={params}/>
    </div>
  )
}

export default page