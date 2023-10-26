import AddBlog from '@/components/Dashboard/Admin/Manage-Blog/AddBlog';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Create Blog`,
  description: 'Best Event Management Website',
}

function CreateBlogPage() {
  return (
    <div
    >
            <AddBlog/>
    </div>
  )
}

export default CreateBlogPage;