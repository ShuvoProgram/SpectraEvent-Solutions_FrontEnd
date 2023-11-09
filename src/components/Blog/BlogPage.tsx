"use client";
/* eslint-disable react/no-unescaped-entities */
import { useGetSingleBlogQuery } from '@/redux/api/blogApi'
import { IDProps } from '@/types'
import React from 'react'
import Spinner from '../Loading/Spinner';

function BlogPage({params}: IDProps) {
    const {id} = params;
    const {data, isLoading} = useGetSingleBlogQuery(id);
    if(isLoading) {
        return <Spinner/>
    }
    return (
        <div className="font-sans leading-normal tracking-normal mt-40 md:mt-16 mb-16">
          
            <div className="container w-full max-w-6xl mx-auto bg-cover mt-8 rounded" style={{
                backgroundImage: `${`url(${data?.image})`}`,
                height: "75vh"
            }}></div>

            <div className="container max-w-5xl mx-auto -mt-32">
                <div className="mx-0 sm:mx-6">
                    <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal font-serif">
                        <h1 className="text-2xl md:text-3xl mb-5">
                            {data?.title}
                        </h1>
                        <p className="py-6" dangerouslySetInnerHTML={{__html: data?.content}} />
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage