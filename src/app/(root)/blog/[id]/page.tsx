import BlogPage from '@/components/Blog/BlogPage'
import { IDProps } from '@/types'
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Blog Details`,
  description: 'Best Event Management Website',
}

function page({params}: IDProps) {
  return (
    <div>
     <BlogPage params={params}/>
    </div>
  )
}
export default page