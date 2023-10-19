import Image from 'next/image'
import React from 'react'

function Testimonial() {
  return (
    <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Clients Testimonials</h2>
              <p>
                Discover the positive impact weve made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and theyre eager to share their
                positive experiences with you.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable.
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <Image src={"https://i.ibb.co/DbjJk0k/1517034956958.jpg"} alt="user_img" width={200} height={100}/>
                    <span>
                      <h4>Jones Mbogholi</h4>
                      <p>Kenya</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  The car was in great condition and made our trip even better.
                  Highly recommend for this car rental website!
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <Image src={"https://i.ibb.co/DbjJk0k/1517034956958.jpg"} alt="user_img" width={200} height={100}/>
                    <span>
                      <h4>Solomon Odingo </h4>
                      <p>South Sudan</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonial