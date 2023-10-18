import React from 'react'
import AdobeImg from "../../../public/images/Adobe.svg";
import AppleImg from "../../../public/images/apple-111.svg";
import GoogleImg from "../../../public/images/google-2015.svg";
import SlackImg from "../../../public/images/slack-21.svg";
import SpotifyImg from "../../../public/images/spotify-11.svg";
import Image from 'next/image';

function Brand() {
  return (
    <section className='pt-12 pb-12 text-center'>
        <p className='mb-4'>Events held by top & biggest global companies</p>
        <div className='flex flex-row flex-wrap justify-center items-center gap-9'>
            <Image src={AdobeImg} width={100} height={50} alt='adobe'/>
            <Image src={AppleImg} width={100} height={50} alt='apple'/>
            <Image src={SlackImg} width={100} height={50} alt='slack'/>
            <Image src={SpotifyImg} width={100} height={50} alt='spotify'/>
            <Image src={GoogleImg} width={100} height={50} alt='google'/>
        </div>
    </section>
  )
}

export default Brand;