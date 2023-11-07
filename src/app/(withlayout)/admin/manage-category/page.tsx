import ManageOrganization from '@/components/Dashboard/Admin/Manage-Category/ManageCategory';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Manage Category`,
  description: 'Best Event Management Website',
}

function OrganizationPage() {

  return (
    <div>
      <ManageOrganization/>
    </div>
  )
}

export default OrganizationPage;