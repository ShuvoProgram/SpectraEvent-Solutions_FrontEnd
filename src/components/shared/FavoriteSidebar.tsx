import Image from 'next/image'
import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function FavoriteSidebar({ cartOpen, setCartOpen }: any) {
    const sidebarWidth = cartOpen ? 'w-96' : 'w-0'
  return (
    <div
      className={`h-screen fixed top-0 right-0 bg-white z-50 ${sidebarWidth} transition-all duration-200`}
    >
      <div className='absolute top-0 left-0 w-full flex justify-between z-40 border-b-2 pb-6 border-gray-300'>
        <span onClick={() => setCartOpen(!cartOpen)}>
          <AiOutlineCloseCircle className='text-2xl m-5 cursor-pointer hover:text-red-500' />
        </span>
        <span className='text-2xl m-5'>Cart</span>
      </div>

      <div className='w-full h-screen overflow-y-scroll no-scrollbar p-5 mt-24 static z-30'>
        {/* cart items */}
        <div className='mb-10 border-b-2 border-gray-300 pb-3'>
          <div className='flex justify-between mb-10'>
            <div className='flex gap-2'>
              <div className='w-16'>
                <Image src='https://i.ibb.co/b36rWjT/1.png' width={70} height={70} alt='cart/image' />
              </div>
              <div>
                <h4 className='font-bold text-lg'>Inspiration Speaks</h4>
                <p className='text-gray-500'>June 19, 2022</p>
                <p className='pt-4 text-gray-500 text-lg'>Qty: 1</p>
              </div>
            </div>

            <div className='flex justify-between flex-col'>
              <span className='p-2 border-2 rounded px-5 border-[#0d99e5] text-[#0d99e5]'>
                $656
              </span>
              <span className='font-bold text-[#0d99e5] text-lg cursor-pointer'>
                Remove
              </span>
            </div>
          </div>
          <button className='w-full py-2 bg-transparent border-2 border-[#0d99e5] text-[#0d99e5] hover:bg-[#112164] hover:text-white'>
            Booking
          </button>
        </div>
      </div>
    </div>
  )
}

export default FavoriteSidebar