import { SectionTitle } from '@/types'
import React from 'react'



function SectionTitle({title}: SectionTitle) {
  return (
    <div>
        <h1 className='text-3xl font-semibold font-serif text-center md:text-left lg:text-left my-4'>{title}</h1>
    </div>
  )
}

export default SectionTitle