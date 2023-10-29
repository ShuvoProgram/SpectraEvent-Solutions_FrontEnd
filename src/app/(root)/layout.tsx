"use client"
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { Layout } from 'antd';
import React from 'react'

function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <Layout>
      <Header />
      {children}
      <Footer />
    </Layout>
  )
}

export default RootLayout;