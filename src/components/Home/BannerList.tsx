"use client"
import { BannerData } from '@/mocks/BannerData';
import Image from 'next/image'
import React from 'react'

export default function BannerList() {

    return (
        <section>
            {/* <Slider {...settings}>
                {
                    BannerData.map((items, idx) => {
                        return (
                            <div className='flex flex-row flex-nowrap justify-center items-center gap-5 overflow-hidden' key={idx} style={{
                                margin: "15px 0px"
                            }}>
                                <Image src={items.imgSrc} alt={items.name} width={676} height={822} />
                            </div>
                        )
                    })
                }
            </Slider> */}

        </section>
    )
}
