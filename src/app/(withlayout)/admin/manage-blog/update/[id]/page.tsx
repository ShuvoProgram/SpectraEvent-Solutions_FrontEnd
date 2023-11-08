import UpdateBlog from '@/components/Dashboard/Admin/Manage-Blog/UpdateBlog'
import { IDProps } from '@/types'
import React from 'react'

function page({params}: IDProps) {
  return (
    <div>
        <UpdateBlog params={params}/>
    </div>
  )
}

export default page