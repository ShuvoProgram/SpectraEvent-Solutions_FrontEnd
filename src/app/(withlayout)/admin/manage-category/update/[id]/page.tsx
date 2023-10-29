import UpdateOrganization from '@/components/Dashboard/Admin/Manage-Category/UpdateCategory';
import { IDProps } from '@/types';
import React from 'react'

function UpdateOrganizationPage({params}: IDProps) {

  return (
    <div>
            <UpdateOrganization params={params}/>
    </div>
  )
}

export default UpdateOrganizationPage;