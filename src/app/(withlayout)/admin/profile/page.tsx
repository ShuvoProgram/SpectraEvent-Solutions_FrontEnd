import Profile from '@/components/Dashboard/Admin/Profile/Profile';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Profile`,
    description: 'Best Event Management Website',
}
function page() {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default page