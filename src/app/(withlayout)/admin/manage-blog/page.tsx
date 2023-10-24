"use client";
import ManageBlog from '@/components/Dashboard/Admin/Manage-Blog/ManageBlog'
import BreadCrumb from '@/components/shared/BreadCrumb'
import React from 'react'

function page() {
  return (
    <div>
         <BreadCrumb
                items={[
                    {
                        label: "Admin",
                        link: "/admin",
                    },
                ]}
            />
        <ManageBlog/>
    </div>
  )
}

export default page