import ManageBlog from '@/components/Dashboard/Admin/Manage-Blog/ManageBlog'
import BreadCrumb from '@/components/shared/BreadCrumb'
import { Metadata } from 'next';
import React from 'react'

// export const metadata: Metadata = {
//   title: `SpectraEvent-Solutions | Manage Blog`,
//   description: 'Best Event Management Website',
// }

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