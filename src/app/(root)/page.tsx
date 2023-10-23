import Hero from '@/components/Home/Hero'
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Story from '@/components/Home/Story';
import Brand from '@/components/Home/Brand';
import FeatureEvent from '@/components/Home/Feature';
import Blog from '@/components/Home/Blog';
import Team from '@/components/Home/Team';
import Category from '@/components/Home/Category';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import UpcommingEvents from '@/components/Home/UpcommingEvents';

// const BannerList = dynamic(() => import('@/components/Home/BannerList'), { ssr: false });

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Home`,
  description: 'Best Event Management Website',
}

export default function Home() {
  return (
    <div>
    {/* <Header /> */}
      <Hero />
      {/* <BannerList /> */}
      <Category title='Events Category'/>
      <FeatureEvent title='Featured Events' subtitle='Grow Today'/>
      <UpcommingEvents title='UpComing Events'/>
      <Story/>
      <Team/>
      <Brand/>
     <Blog title='Blog' subtitle='Latest Blog'/>
     {/* <Footer /> */}
    </div>
  )
}
