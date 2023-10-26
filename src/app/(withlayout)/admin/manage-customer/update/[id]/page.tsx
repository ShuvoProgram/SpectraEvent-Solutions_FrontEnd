import UpdateCustomer from '@/components/Dashboard/Admin/Manage-Customer/UpdateCustomer';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { IDProps } from '@/types';
import React from 'react'

function UpdateCustomerProfile({ params }: IDProps) {
  return (
    <div>
         <BreadCrumb
                items={[
                    {
                        label: "Admin",
                        link: "/admin",
                    },
                    {
                        label: "User",
                        link: "/admin/user",
                    },
                ]}
            />
            <UpdateCustomer params={params}/>
    </div>
  )
}

export default UpdateCustomerProfile;