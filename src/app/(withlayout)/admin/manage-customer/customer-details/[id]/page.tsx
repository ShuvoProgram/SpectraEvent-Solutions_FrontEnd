import CustomerDetails from '@/components/Dashboard/Admin/Manage-Customer/CustomerDetails';
import { IDProps } from '@/types';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Customer Details`,
  description: 'Best Event Management Website',
}

function CustomerProfilePage({ params }: IDProps) {
  return (
    <div>
            <CustomerDetails params={params}/>
    </div>
  )
}

export default CustomerProfilePage;