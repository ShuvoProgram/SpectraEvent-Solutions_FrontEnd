import React from 'react'
import BreadCrumb from '@/components/shared/BreadCrumb';
import { Metadata } from 'next';
import ManageFaq from '@/components/Dashboard/Admin/Manage-Faq/ManageFaq';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Manage Faq`,
  description: 'Best Event Management Website',
}

function ManageFaqPage() {

  return (
    <>
      <BreadCrumb
      
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />
      <ManageFaq/>
    </>
  )
}

export default ManageFaqPage;
