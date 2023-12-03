"use client"
import Footer from '@/components/shared/Footer';
import Headers from '@/components/shared/Headers';
import Navber from '@/components/shared/Navber/Navbar';
import { Layout } from 'antd';
import React from 'react'

function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <Layout>
      {/* <Headers /> */}
      <Navber/>
      {children}
      <Footer />
    </Layout>
  )
}

export default RootLayout;