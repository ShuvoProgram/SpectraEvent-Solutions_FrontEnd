"use client"
import Contents from '@/components/shared/Contents';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Sidebar from '@/components/shared/Sidebar';
import { isLoggedIn } from '@/services/auth.service';
import { Layout } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function DashboardLayout({ children }: { children: React.ReactNode }) {
  // const [collapsed, setCollapsed] = useState(false);
    const userLoggedIn = isLoggedIn();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!userLoggedIn) {
          router.push("/login");
        }
        setIsLoading(true);
      }, [router, isLoading, userLoggedIn]);
  return (
    <Layout>
      <Header hasSider={true}/>
      <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
      </Layout>
    </Layout>
  )
}

export default DashboardLayout;