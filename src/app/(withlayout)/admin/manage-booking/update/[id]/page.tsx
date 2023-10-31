import UpdateBooking from '@/components/Dashboard/Admin/Manage-Booking/UpdateBooking'
import { IDProps } from '@/types'
import React from 'react'

function page({params}: IDProps) {
  return (
    <div>
        <UpdateBooking params={params}/>
    </div>
  )
}

export default page