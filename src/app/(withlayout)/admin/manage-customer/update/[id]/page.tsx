import UpdateCustomer from '@/components/Dashboard/Admin/Manage-Customer/UpdateCustomer';
import { IDProps } from '@/types';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Update Customer`,
  description: 'Best Event Management Website',
}

function UpdateCustomerProfile({ params }: IDProps) {
  return (
    <div>
            <UpdateCustomer params={params}/>
    </div>
  )
}

export default UpdateCustomerProfile;