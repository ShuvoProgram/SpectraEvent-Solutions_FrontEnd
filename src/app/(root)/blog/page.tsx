import React from 'react'
import { Col, Row } from 'antd';
import BlogCard from '@/components/Blog/BlogCard';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { Metadata } from 'next';
import Blog from '@/components/Blog/Blog';

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Blog`,
  description: 'Best Event Management Website',
}

function BlogPage() {
  return (
   <>
   <Blog/>
   </>
  )
}

export default BlogPage;