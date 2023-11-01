"use client"
import React from 'react'
import TeamCard from '../shared/TeamCard'
import SectionTitle from '../shared/SectionTitle'
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Team() {

    const reviewSettings: Settings = {
        dots: false,
        className: `center`,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        swipeToSlide: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1324,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
        <section>
            <div className="bg-gray-100 ">
                <div className="py-10 max-w-screen-lg mx-auto">
                   <SectionTitle title='Our Team'/>
                   <Slider {...reviewSettings}>
                    <div className="">
                    <TeamCard name='Shuvo' position='Manager' img='https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'/>
                    </div>
                    <div className="">
                    <TeamCard name='Shuvo' position='Manager' img='https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'/>
                    </div>
                    <div className="">
                    <TeamCard name='Shuvo' position='Manager' img='https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'/>
                    </div>
                    <div className="">
                    <TeamCard name='Shuvo' position='Manager' img='https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500'/>
                    </div>
                   </Slider>

                </div>
            </div>
        </section>
    )
}

export default Team;