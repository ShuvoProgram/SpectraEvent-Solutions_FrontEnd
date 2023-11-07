import CreateOrganization from '@/components/Dashboard/Admin/Manage-Category/CreateCategory';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Create Category`,
  description: 'Best Event Management Website',
}

function CreateOrganizationPage() {
  return (
    <div>
        <CreateOrganization/>
    </div>
  )
}

export default CreateOrganizationPage;