import Image from 'next/image';
import React from 'react'
import {
    HeartFilled,
    HeartOutlined
  } from '@ant-design/icons';
import Link from 'next/link';

interface IBlogCard {
    author: string;
     title: string;
      date: string;
       img: string;
        description: string;
        liked: boolean;
        likeCount: number;
        link: string;
}

function BlogCard({author, title, date, img, description, liked, likeCount, link}: IBlogCard) {
  return (
    <div className="rounded overflow-hidden shadow-lg font-serif">
            <Link href="#"></Link>
            <div className="relative">
                <Link href="#">
                    <Image width={100} height={100} className="w-full"
                        src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </Link>
                <Link href="#!">
                    <div
                        className="absolute bottom-0 left-0 bg-[#FF5B22] px-4 py-2 text-white text-sm hover:bg-white hover:text-[#FF5B22] transition duration-500 ease-in-out">
                        Photos
                    </div>
                </Link>

                <Link href="!#">
                    <div
                        className="text-sm absolute top-0 right-0 bg-[#FF5B22] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#FF5B22] transition duration-500 ease-in-out">
                        <span className="font-bold">27</span>
                        <small>March</small>
                    </div>
                </Link>
            </div>
            <div className="px-6 py-4">

                <Link href="#"
                    className="font-semibold text-lg inline-block hover:text-[#FF5B22] transition duration-500 ease-in-out">Best
                    View in Newyork City</Link>
                <p className="text-gray-500 text-sm">
                    The city that never sleeps
                </p>
            </div>
            <div className="flex items-center px-6 py-2">
                    <a
                        href="#">
                          <Image width={100} height={100} className="w-10 h-10 rounded-full mr-4" src={img} alt="Avatar of Jonathan Reinink"/>
                          </a>
                    <div className="text-sm">
                        <a href="#" className="text-gray-900 font-semibold leading-none hover:text-[#FF5B22]">Jonathan
                            Reinink</a>
                        <p className="text-gray-600">Aug 18</p>
                    </div>
                </div>
            <div className="px-6 py-2 flex flex-row items-center">
                <Link href="#" className="py-1 text-sm font-regular text-gray-900 hover:text-[#FF5B22] mr-1 flex flex-row items-center">
                    <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                         x="0px" y="0px" viewBox="0 0 512 512"
                        >
                        <g>
                            <g>
                                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                            </g>
                        </g>
                    </svg>
                    <span className="ml-1">6 mins ago</span></Link>
            </div>
        </div>
  )
}

export default BlogCard