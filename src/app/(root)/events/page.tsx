import Events from '@/components/Events/Events';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Events`,
  description: 'Best Event Management Website',
}

function page() {
  return (
    <div>
        <Events/>
    </div>
  )
}

export default page;