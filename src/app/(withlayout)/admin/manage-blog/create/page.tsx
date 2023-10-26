import AddBlog from '@/components/Dashboard/Admin/Manage-Blog/AddBlog';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { Metadata } from 'next';
import React from 'react'

// export const metadata: Metadata = {
//   title: `SpectraEvent-Solutions | Create Blog`,
//   description: 'Best Event Management Website',
// }

function CreateBlogPage() {
  return (
    <div
    style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
         <BreadCrumb
                items={[
                    {
                        label: "Admin",
                        link: "/admin",
                    },
                    {
                        label: "Blog",
                        link: "/admin/blog",
                    },
                ]}
            />
            <AddBlog/>
    </div>
  )
}

export default CreateBlogPage;