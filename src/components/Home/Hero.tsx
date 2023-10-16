'use client'

import Link from 'next/link'
import React from 'react'


export default function Hero() {
    return (
        <div className='py-24 text-center'>
            <div className='text-5xl font-extrabold leading-[70px]'>
                Expand Your <span className='text-gradient-blue'>Knowledge</span>{' '}
                <br className='hidden lg:block' />
                by <span className='text-gradient-pink'>Joining</span>
                {' '}Our Greatest Events
            </div>
            <p className='my-7 text-base leading-7 font-semibold'>We provide the best events to boost your knowledge and experience</p>
            <Link href={'/'} className='btn-orange py-4 px-8 rounded-full'>Browse Now</Link>
        </div>
    )
}
