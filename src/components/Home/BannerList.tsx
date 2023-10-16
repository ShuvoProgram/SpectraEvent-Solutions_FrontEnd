import Image from 'next/image'
import React from 'react'

export default function BannerList() {
    return (
        <section className='flex flex-row flex-nowrap justify-center items-center gap-5 overflow-hidden'>
            <Image src={'https://i.ibb.co/b36rWjT/1.png'} alt='img-1' width={676} height={822} />
            <Image src={'https://i.ibb.co/5r6b5FC/2.png'} alt='img-1' width={676} height={822} />
            <Image src={'https://i.ibb.co/5r6b5FC/2.png'} alt='img-1' width={676} height={822} />
        </section>
    )
}
