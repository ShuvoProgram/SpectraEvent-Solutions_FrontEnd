"use client"
import { Rate } from 'antd';
import Image from 'next/image';
import React from 'react';

function EventCard({title, category, imageUrl, price, description, review, vanue}: any) {
   const desc = description ? description.slice(0, 500) : "";
   const totalReview = Array.isArray(review) ? review.length : 0;
    // Calculate the sum of ratings
    const sumOfRatings = Array.isArray(review)
        ? review.reduce((total: any, rv: any) => total + rv.rating, 0)
        : 0;

    // Calculate the average rating
    const averageRating = totalReview > 0 ? sumOfRatings / totalReview : 0;

  return (
    <div className="p-2 py-5 bg-purple-100 text-center transform duration-500 hover:-translate-y-2 cursor-pointer shadow-lg w-[330px] mx-auto">

    <div className="absolute mt-3 ml-3">
        <button className="h-6 bg-[#E74040] text-white px-3 text-sm rounded font-medium">{category}</button>
    </div>

    <div className="absolute ml-48 mt-3 max-w-fit rounded-full bg-white p-2 text-[#E74040] right-[1.3rem]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    </div>
    <div className="rounded-md">
        <Image src={imageUrl} width={320} height={150} alt='test'/>
    </div>

    <div className="flex flex-col space-y-2.5 mt-8 px-5">
    <div className="flex justify-center flex-col">
    <Rate disabled defaultValue={averageRating} />
    <span>( {totalReview} Reviews )</span>
            </div>
        <div className="max-w-fit">
            <p className="text-2xl text-[#252B42] tracking-wider ">{title}</p>
        </div>

        <div className="max-w-fit">
            <p className="text-sm text-[#252B42] tracking-wider ">Venue: {vanue}</p>
        </div>

        <div className="max-w-fit">
        <span dangerouslySetInnerHTML={{__html: desc}} className='text-sm'/>
        </div>

        <div className="max-w-fit">
            <p className="text-2xl text-[#737373] font-medium">$ {price}</p>
        </div>
    </div>
</div>
  )
}

export default EventCard