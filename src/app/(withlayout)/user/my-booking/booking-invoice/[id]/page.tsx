import BookingInvoice from '@/components/Dashboard/User/Booking/BookingInvoice'
import { IDProps } from '@/types'
import React from 'react'

function page({params}: IDProps) {
  const { id } = params;
  return (
    <div>
        <BookingInvoice params={id}/>
    </div>
  )
}

export default page