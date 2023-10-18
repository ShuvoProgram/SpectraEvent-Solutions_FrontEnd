import React from 'react'

type CheckoutDetailProps = {
    bookingId: string;
    userId: string;
  };

function CheckoutDetails({bookingId, userId}: CheckoutDetailProps) {
  return (
    <section className="mt-[70px] mb-[50px] container flex flex-wrap justify-center items-center gap-5">
    <div className='flex flex-col gap-3'>
        <h5>Wedding</h5>

        <div className='flex items-center gap-3'>
            <span>Dhaka</span>
        </div>
        <div className='flex items-center gap-3'>
            <span>03:30</span>
        </div>
        <div className='flex items-center gap-3'>
            <span>23-10-23</span>
        </div>
    </div>
  </section>
  )
}

export default CheckoutDetails