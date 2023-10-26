import CustomerDetails from '@/components/Dashboard/Admin/Manage-Customer/CustomerDetails';
import ActionBar from '@/components/shared/ActionBar';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { IDProps } from '@/types';
import React from 'react'

function CustomerProfilePage({ params }: IDProps) {
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
            <ActionBar title="Customer" />
            <CustomerDetails params={params}/>
    </div>
  )
}

export default CustomerProfilePage;