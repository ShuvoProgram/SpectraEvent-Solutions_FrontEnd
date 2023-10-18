import CheckoutDetails from '@/components/Checkout/CheckoutDetails'
import CheckoutForm from '@/components/Checkout/CheckoutForm'
import React from 'react'

function Checkout() {
  return (
    <section className=''>
        <div className='py-[100px] container'>
            <div className='text-center text-3xl font-semibold'>Boost Your Knowledge and Experience</div>
            <CheckoutDetails bookingId={''} userId={''}/>
            <CheckoutForm eventId={''} ticketId={''} organizerId={''}/>
        </div>
    </section>
  )
}

export default Checkout