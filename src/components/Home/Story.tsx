import Image from 'next/image';
import React from 'react'

function Story() {
  return (
    <section className='pt-[80px] pb-[70px]'>
        <div className='flex flex-row justify-center items-center container'>
            <Image src='https://i.ibb.co/GW3tjT2/ali-morshedlou-WMD64t-Mfc4k-unsplash.jpg' width={315} alt='story' height={200} className='hidden lg:block mr-10 rounded-lg'/>
            <div className='flex flex-col'>
                <div className='font-serif'>
                    <div className='text-xl font-medium'>
                        <span className='text-[#FF5B22]'>Story</span>
                    </div>
                    <div className='text-3xl font-medium'>
                    One Great Event. <br className="hidden lg:block" />
              For The Better World.
                    </div>
                    <p className='my-8 text-base font-normal'>
                    Event management is the art of planning, organizing, and executing gatherings,<br className='hidden lg:block'/>
                     conferences, weddings, and other occasions.<br className='hidden lg:block'/>
                     It involves coordinating logistics, vendors, and<br className='hidden lg:block'/>
                      details to create successful and memorable experiences.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story;