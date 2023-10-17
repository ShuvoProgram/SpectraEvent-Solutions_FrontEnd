// import BannerList from '@/components/Home/BannerList'
import Hero from '@/components/Home/Hero'
import Meta from '@/hooks/Meta'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const BannerList = dynamic(() => import('@/components/Home/BannerList'), { ssr: false });

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Home`,
  description: 'Best Event Management Website',
}

export default function Home() {
  return (
    <>
      <Hero />
      <BannerList />
    </>
  )
}
