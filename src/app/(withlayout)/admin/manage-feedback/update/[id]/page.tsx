import UpdateFeedback from '@/components/Dashboard/Admin/Manage-Feedback/UpdateFeedback'
import { IDProps } from '@/types'
import React from 'react'

function page({params}: IDProps) {
  return (
    <div>
        <UpdateFeedback params={params}/>
    </div>
  )
}

export default page