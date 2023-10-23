"use client"
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { isLoggedIn } from '@/services/auth.service';
import { Layout, Row, Space, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function RootLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
  const userLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // if (!userLoggedIn) {
    //   router.push("/login");
    // }
    setIsLoading(true);
  }, [router, userLoggedIn]);

  if (!isLoading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }
  return (
    <Layout>
      <Header />
      {children}
      <Footer />
    </Layout>
  )
}

export default RootLayout;