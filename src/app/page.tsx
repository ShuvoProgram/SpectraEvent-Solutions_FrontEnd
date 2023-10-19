// import BannerList from '@/components/Home/BannerList'
import Hero from '@/components/Home/Hero'
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Story from '@/components/Home/Story';
import Brand from '@/components/Home/Brand';
import FeatureEvent from '@/components/Home/Feature';
import Blog from '@/components/Home/Blog';
import Team from '@/components/Home/Team';
import Category from '@/components/Home/Category';

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
      <Category title='Events Category'/>
      <FeatureEvent title='Featured Events' subtitle='Grow Today'/>
      <Story/>
      <Team/>
      <Brand/>
     <Blog title='Blog' subtitle='Latest Blog'/>
    </>
  )
}
