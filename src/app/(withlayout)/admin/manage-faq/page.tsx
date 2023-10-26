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
    <div
    style={{
      border: "1px solid #d9d9d9",
      borderRadius: "5px",
      padding: "15px",
      marginBottom: "10px",
      marginTop: "10px",
    }}
    >
      <BreadCrumb
      
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />
      <ManageFaq/>
    </div>
  )
}

export default ManageFaqPage;
