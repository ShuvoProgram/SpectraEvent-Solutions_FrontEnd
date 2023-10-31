import { SectionTitle } from '@/types'
import React from 'react'



function SectionTitle({title}: SectionTitle) {
  return (
    <div>
        <h1 className='text-3xl font-semibold font-serif'>{title}</h1>
    </div>
  )
}

export default SectionTitle