import { Metadata } from 'next'
import React from 'react';
import Dashboard from '@/components/Dashboard/Admin/Dashboard';

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Admin Dashboard`,
    description: 'Best Event Management Website',
}

export default function AdminPage() {
 
  return (
 <div>
  <Dashboard/>
 </div>
  )
}
