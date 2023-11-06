import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaTwitterSquare, FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const footerFeatureLinks = [
    {
        name: 'Virtual',
        href: '/',
    },
    {
        name: 'Pricing',
        href: '/',
    },
    {
        name: 'Merchant',
        href: '/',
    },
    {
        name: 'Tickets',
        href: '/',
    },
]

const footerLinks = [
    {
        name: 'Privacy-Policy',
        href: '/privacy-policy'
    },
    {
        name: 'Newsletter',
        href: '/'
    },
    {
        name: 'Community',
        href: '/'
    },
    {
        name: 'Become a member',
        href: '/'
    },
]


const socialMedia = [
    {
        name: "instagram",
        icon: AiFillInstagram,
        href: "/",
    },
    {
        name: "linkedin",
        icon: FaLinkedin,
        href: "/",
    },
    {
        name: "twitter",
        icon: FaTwitterSquare,
        href: "/",
    },
    {
        name: "telegram",
        icon: FaTelegramPlane,
        href: "/",
    },
];

export default function Footer() {
    return (
        <footer className="py-10">
            <div className="container mx-auto">
                <div className="site-footer__top flex flex-wrap md:flex-nowrap justify-between md:space-x-12 pb-12">
                    <div className="site-footer__description mb-10 md:mb-0 md:w-2/5">
                        <h6 className="flex text-black font-light items-center mb-8">
                            <Image src={`https://i.ibb.co/tbYktFp/logo-removebg-preview.png`} width={250} height={100} alt='SpectraEvent-Solutions' />
                        </h6>
                        <p className="text-sm md:text-base">Event management is the art of planning, organizing, and executing gatherings, conferences, weddings, and other occasions. It involves coordinating logistics, vendors, and details to create successful and memorable experiences.</p>
                        <ul className=" mt-5 md:mt-5 flex">
                            {socialMedia.map((items) => (
                                <li key={items.name} className="text-2xl md:text-3xl mr-6">
                                    <Link href={items.href} className='flex w-full'>
                                        <items.icon
                                            style={{
                                                color: "#FF5B22",
                                                width: "30px",
                                                height: "25px",

                                            }}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="site-footer__links flex flex-wrap md:flex-nowrap w-full md:w-3/5">
                        <ul className="w-full md:w-1/3 mb-10 md:mb-0">
                            <li className="font-bold text-sm md:text-base">Feature</li>
                            {
                                footerFeatureLinks.map((features, idx) => (
                                    <li className="text-sm md:text-base" key={idx}><Link href={features.href} className='bg-gray-100 text-gray-500'>{features.name}</Link></li>
                                ))
                            }
                        </ul>
                        <ul className="w-full md:w-1/3 mb-10 md:mb-0">
                            <li className="font-bold text-sm md:text-base">Information</li>
                            {
                                footerLinks.map((learn, idx) => (
                                    <li className="text-sm md:text-base" key={idx}><Link href={learn.href} className='bg-gray-100 text-gray-500'>{learn.name}</Link></li>
                                ))
                            }
                        </ul>
                        <ul className="w-full md:w-1/3">
                            <li className="font-bold text-sm md:text-base">Contact</li>
                            <li className="text-sm md:text-base"><a className='bg-gray-100 text-gray-500' href="#">store@uikit.com</a></li>
                            <li className="text-sm md:text-base"><a className='bg-gray-100 text-gray-500' href="#">Hotline: +1 131 138 138</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-300 py-5">
                <div className="container text-xs md:text-base text-center">
                    <p>SpectraEvent-Solutions - © {new Date().getFullYear()}. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    )
}
