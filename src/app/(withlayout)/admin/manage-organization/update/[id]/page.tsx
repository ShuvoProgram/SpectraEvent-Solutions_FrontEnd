import UpdateOrganization from '@/components/Dashboard/Admin/Manage-Organization/UpdateOrganization';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { IDProps } from '@/types';
import React from 'react'

function UpdateOrganizationPage({params}: IDProps) {

  return (
    <div>
      <BreadCrumb
                items={[
                    {
                        label: "Admin",
                        link: "/admin",
                    },
                    {
                        label: "Organization",
                        link: "/admin/manage-organization",
                    },
                ]}
            />
            <UpdateOrganization params={params}/>
    </div>
  )
}

export default UpdateOrganizationPage;