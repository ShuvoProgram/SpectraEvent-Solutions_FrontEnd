import UpdateBooking from '@/components/Dashboard/Admin/Manage-Booking/UpdateBooking'
import { IDProps } from '@/types'
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Update Booking`,
  description: 'Best Event Management Website',
}

function page({params}: IDProps) {
  return (
    <div>
        <UpdateBooking params={params}/>
    </div>
  )
}

export default page