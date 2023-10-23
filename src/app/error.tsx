"use client";
import { Button, Result } from 'antd';
import Link from 'next/link';
import React from 'react';

function ErrorPage() {
  return (
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    }}
    >
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link href={`/`}>
        <Button type="primary">
          Back Home
        </Button>
        </Link>
      }
    />
    </div>
  )
}

export default ErrorPage;