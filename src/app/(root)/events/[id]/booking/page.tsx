import BookingInformation from '@/components/Booking/BookingInformation';
import BookingSchedule from '@/components/Booking/BookingSchedule';
import { IDProps } from '@/types';
import React from 'react'

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