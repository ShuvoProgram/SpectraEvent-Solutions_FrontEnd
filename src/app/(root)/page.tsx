import { Metadata } from 'next';
import Story from '@/components/Home/Story';
import Brand from '@/components/Home/Brand';
import FeatureEvent from '@/components/Home/Feature';
import Blog from '@/components/Home/Blog';
import Team from '@/components/Home/Team';
import Category from '@/components/Home/Category';
import UpcommingEvents from '@/components/Home/UpcommingEvents';
import HeroSection from '@/components/Home/HeroSection';
import ClientReview from '@/components/Home/ClientReview';
import FeedbackForm from '@/components/Home/FeedbackForm';

// const BannerList = dynamic(() => import('@/components/Home/BannerList'), { ssr: false });

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Home`,
  description: 'Best Event Management Website',
}

export default function Home() {
  return (
    <div>
      <HeroSection/>
      {/* <BannerList /> */}
      <Category/>
      <FeatureEvent/>
      <UpcommingEvents/>
      <Story/>
      <Team/>
      <Brand/>
      <ClientReview/>
      {/* <Test/> */}
     <Blog title='Blog' subtitle='Latest Blog'/>
     <FeedbackForm/>
    </div>
  )
}
