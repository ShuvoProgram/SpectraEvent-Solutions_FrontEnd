import UpdateOrganization from '@/components/Dashboard/Admin/Manage-Category/UpdateCategory';
import { IDProps } from '@/types';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Update Category`,
  description: 'Best Event Management Website',
}

function UpdateOrganizationPage({params}: IDProps) {

  return (
    <div>
            <UpdateOrganization params={params}/>
    </div>
  )
}

export default UpdateOrganizationPage;