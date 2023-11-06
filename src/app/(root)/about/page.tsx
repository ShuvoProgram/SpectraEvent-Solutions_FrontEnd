import FAQ from '@/components/About/FAQ'
import BlogPage from '@/components/Blog/BlogPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | About`,
  description: 'Best Event Management Website',
}

function About() {
  return (
    <div className=''>
        {/* <FAQ/> */}
        <BlogPage/>
    </div>
  )
}

export default About