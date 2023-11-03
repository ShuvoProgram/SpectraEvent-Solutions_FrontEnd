"use client"
import { useCreateFavoriteMutation } from '@/redux/api/favorite';
import { isLoggedIn } from '@/services/auth.service';
// import { decodedToken } from '@/utils/jwt';
// import { getFromLocalStorage } from '@/utils/local-storage';
import { Rate, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import internal from 'stream';

type Event = {
    title: string;
    category: string;
    imageUrl: string;
    price: number;
    description: any;
    review: any;
    vanue: string;
    href: string;
    id: string;
    isComing?: boolean;
}

function EventCard({title, category, imageUrl, price, description, review, vanue, href, id, isComing}: Event) {
    const userLoggedIn = isLoggedIn();
    const [createFavorite] = useCreateFavoriteMutation();
   const desc = description ? description.slice(0, 437) : "";
   const totalReview = Array.isArray(review) ? review.length : 0;
    // Calculate the sum of ratings
    const sumOfRatings = Array.isArray(review)
        ? review.reduce((total: any, rv: any) => total + rv.rating, 0)
        : 0;

    // Calculate the average rating
    const averageRating = totalReview > 0 ? sumOfRatings / totalReview : 0;

    const handleFavorite = async (id: String) => {
        const data = {
            eventId: id
        }
       
        try {
            if(!userLoggedIn) {
                message.error("You must be logged in to continue")
            } else {
                const res = await createFavorite({...data}).unwrap()
                if(res.id) {
                    message.success("Favorite was successfully created")
                } else {
                    message.error("Internal error occurred")
                }
            }
        } catch (error: any) {
            message.error("Already has favorite list")
        }
    }

  return (
    <div className="p-2 py-5 text-center transform duration-500 hover:-translate-y-2 shadow-lg w-[280px] mx-auto">

    <div className="absolute mt-3 ml-3">
        <button className="h-6 bg-[#FF5B22] text-white px-2 text-xs rounded font-medium">{category}</button>
    </div>

    <button className="absolute ml-48 mt-3 max-w-fit rounded-full bg-white p-2 text-[#E74040] right-[1.7rem]" onClick={() => handleFavorite(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    </button>
    <div className="rounded-md">
        <Image src={imageUrl} width={270} height={150} alt='test'/>
    </div>

    <div className="flex flex-col space-y-2.5 mt-4 px-2">
    <div className="flex justify-center flex-col">
    <Rate disabled defaultValue={averageRating} />
    <span>( {totalReview} Reviews )</span>
            </div>
        <Link href={isComing === true ? '#' : `${href}`} className="">
            <p className="text-lg text-[#252B42] tracking-wider text-center">{isComing === true ? `Coming Soon` : title}</p>
        </Link>

        <div className="flex justify-between">
            <span className="text-base">Venue: {vanue}</span>
            <span className="text-base">Price: $ {isComing === true ? `Coming Soon` : price}</span>
        </div>

        <div className="max-w-fit">
        <span dangerouslySetInnerHTML={{__html: desc}} className='text-sm'/>
        </div>

        <div className="max-w-fit">
            
        </div>
    </div>
</div>
  )
}

export default EventCard