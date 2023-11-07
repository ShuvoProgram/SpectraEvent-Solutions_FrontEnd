import UpdateFeedback from '@/components/Dashboard/Admin/Manage-Feedback/UpdateFeedback'
import { IDProps } from '@/types'
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Update Feedback`,
  description: 'Best Event Management Website',
}

function page({params}: IDProps) {
  return (
    <div>
        <UpdateFeedback params={params}/>
    </div>
  )
}

export default page