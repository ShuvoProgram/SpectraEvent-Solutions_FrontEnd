'use client';
import AddBlog from '@/components/Dashboard/Admin/Manage-Blog/AddBlog';
import BreadCrumb from '@/components/shared/BreadCrumb';
import React from 'react'

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