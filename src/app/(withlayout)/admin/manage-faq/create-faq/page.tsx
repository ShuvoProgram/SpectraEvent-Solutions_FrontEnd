import CreateFaq from '@/components/Dashboard/Admin/Manage-Faq/CreateFaq';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Create Faq`,
  description: 'Best Event Management Website',
}


function CreateFaqPage() {

  return (
    <div>
     <CreateFaq/>
    </div>
  )
}
export default CreateFaqPage;