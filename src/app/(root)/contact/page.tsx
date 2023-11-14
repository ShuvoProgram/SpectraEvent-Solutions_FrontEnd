import ContactPage from '@/components/Contact/ContactPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Contact`,
    description: 'Best Event Management Website',
  }

function page() {
  return (
    <>
    <ContactPage/>
    </>
  )
}

export default page