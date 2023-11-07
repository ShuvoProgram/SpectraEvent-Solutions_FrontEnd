import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <Link href={`/super_admin/manage-admin/create`}>Create Admin</Link>
    </div>
  )
}

export default page