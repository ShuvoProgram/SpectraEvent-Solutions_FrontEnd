"use client"
import Contents from '@/components/shared/Contents';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Sidebar from '@/components/shared/Sidebar';
import { Layout } from 'antd';
import React, { useState } from 'react'

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Header hasSider={true} collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout;