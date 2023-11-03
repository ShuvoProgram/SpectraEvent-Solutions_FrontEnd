import BookingInformation from '@/components/Booking/BookingInformation';
import BookingSchedule from '@/components/Booking/BookingSchedule';
import { IDProps } from '@/types';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Bookings`,
  description: 'Best Event Management Website',
}

const page = ({params}: IDProps) => {
    const {id} = params;
  return (
    <div className='container'>
        <BookingInformation id={id}/>
        <BookingSchedule id={id}/>
    </div>
  )
}

export default page