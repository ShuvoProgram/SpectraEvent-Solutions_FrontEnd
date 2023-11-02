import CategoryPage from '@/components/Category/CategoryPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Category`,
  description: 'Best Event Management Website',
}

function page() {
  return (
    <div>
        <CategoryPage/>
    </div>
  )
}

export default page