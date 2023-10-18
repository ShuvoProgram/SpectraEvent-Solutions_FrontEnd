import Image from 'next/image';
import React from 'react'
import StoryImg from '../../../public/images/story.png';

function Story() {
  return (
    <section className='pt-[100px] pb-[70px]'>
        <div className='flex flex-row justify-center items-center container'>
            <Image src={StoryImg} width={515} alt='story' height={0} className='hidden lg:block mr-10'/>
            <div className='flex flex-col'>
                <div>
                    <div className='text-xl font-medium'>
                        <span className='text-gradient-pink'>Story</span>
                    </div>
                    <div className='text-3xl font-medium text-black'>
                    One Great Event. <br className="hidden lg:block" />
              For The Better World.
                    </div>
                    <p className='my-8 text-base font-normal text-[#a3a5aa]'>
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