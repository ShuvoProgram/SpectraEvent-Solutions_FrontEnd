import ManageFeedback from '@/components/Dashboard/Admin/Manage-Feedback/ManageFeedback'
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Manage Feedback`,
  description: 'Best Event Management Website',
}

function page() {
  return (
    <div>
        <ManageFeedback/>
    </div>
  )
}

export default page