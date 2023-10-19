import { Tag } from 'antd'
import Link from 'next/link'
import React from 'react'

interface Tag {
    tagLink: string;
}

function TagList({tagLink}: Tag) {
  return (
    <div>
        <Tag>
      <Link href={`${tagLink}`}>Link</Link>
    </Tag>
    </div>
  )
}

export default TagList