import UpdateFaq from '@/components/Dashboard/Admin/Manage-Faq/UpdateFaq';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Update Faq`,
  description: 'Best Event Management Website',
}


type IDProps = {
  params: any;
};
function UpdatePage({params}: IDProps) {
  const {id} = params;
  return (
    <div>
      <UpdateFaq id={id}/>
    </div>
  )
}

export default UpdatePage;