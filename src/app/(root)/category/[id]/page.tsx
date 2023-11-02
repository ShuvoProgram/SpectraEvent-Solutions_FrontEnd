import SingleCategoryByEvents from '@/components/Category/SingleCategoryByEvents'
import { IDProps } from '@/types'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Category `,
  description: 'Best Event Management Website',
}

function page({params}: IDProps) {
  return (
    <div>
        <SingleCategoryByEvents params={params}/>
    </div>
  )
}

export default page