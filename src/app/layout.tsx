import './globals.css';
import type { Metadata } from 'next';
import Providers from '@/lib/Providers';
import { ConfigProvider } from 'antd';
import { antdConfig } from '@/constants/antConfig';

export const metadata: Metadata = {
  icons: 'https://i.ibb.co/mySk1YY/logo-removebg-preview-modified.png',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <Providers>
        <html>
          <body className="app">
            {children}
          </body>
        </html>
      </Providers>
  );
}
