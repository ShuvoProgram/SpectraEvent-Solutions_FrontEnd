import ManageOrganization from '@/components/Dashboard/Admin/Manage-Organization/ManageOrganization';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Manage Organization`,
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