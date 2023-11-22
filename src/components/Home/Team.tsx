"use client"
import React from 'react'
import TeamCard from '../shared/TeamCard'
import SectionTitle from '../shared/SectionTitle'
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from '../shared/CaroselArrow';

function Team() {

    const reviewSettings: Settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        swipeToSlide: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
          {
            breakpoint: 1324,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };



    return (
        <section className="bg-gray-100">
           <div className="relative py-10 container mx-auto">
                   <SectionTitle title='Our Team'/>
                   <Slider {...reviewSettings}>
                   <TeamCard name='Hasan' position='Photographer' img='https://i.ibb.co/SBzrSDj/joseph-gonzalez-i-Fg-Rcq-Hznqg-unsplash.jpg'/>
                    <TeamCard name='Imran' position='Event Planer' img='https://i.ibb.co/5Mm6yyR/vince-fleming-j3lf-Jn6deo-unsplash.jpg'/>
                    <TeamCard name='Jakaria' position='Team Leader' img='https://i.ibb.co/r02nZVW/philip-martin-5a-GUy-CW-PJw-unsplash.jpg'/>
                    <TeamCard name='Limon' position='Manager' img='https://i.ibb.co/qsgzG59/darshan-patel-QJEVpydul-Gs-unsplash.jpg'/>
                    <TeamCard name='Limon' position='Manager' img='https://i.ibb.co/qsgzG59/darshan-patel-QJEVpydul-Gs-unsplash.jpg'/>
                   </Slider>
                   <div>
                </div>
                </div>
        </section>
    )
}

export default Team;