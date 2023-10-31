import ManageBooking from '@/components/Dashboard/Admin/Manage-Booking/ManageBooking'
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Manage Booking`,
  description: 'Best Event Management Website',
}

function page() {
  return (
    <div>
        <ManageBooking/>
    </div>
  )
}

export default page