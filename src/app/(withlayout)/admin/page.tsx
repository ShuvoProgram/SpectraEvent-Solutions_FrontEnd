import CustomerData from '@/components/Dashboard/Admin/Dashboard/CustomerData'
import EventData from '@/components/Dashboard/Admin/Dashboard/EventData'
import RecentActivity from '@/components/Dashboard/Admin/Dashboard/RecentActivity'
import WelcomeBanner from '@/components/Dashboard/Admin/Dashboard/WelcomeBanner'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Admin Dashboard`,
    description: 'Best Event Management Website',
}

export default function AdminPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />
             {/* Cards */}
             <div className="grid grid-cols-12 gap-6">
              <CustomerData/>
              <EventData/>
              <RecentActivity/>
             </div>
        </div>
      </div>
    </div>
  )
}
