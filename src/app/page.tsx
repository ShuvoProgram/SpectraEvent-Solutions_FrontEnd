'use client'
import BannerList from '@/components/Home/BannerList'
import Hero from '@/components/Home/Hero'
import Meta from '@/hooks/Meta'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <BannerList />
    </>
  )
}
