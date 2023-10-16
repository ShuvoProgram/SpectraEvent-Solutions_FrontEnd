import Header from '@/components/shared/Header'
import './globals.css'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Footer from '@/components/shared/Footer'
import Providers from '@/lib/Providers'
// import { ThemeProvider as NextThemesProvider } from "next-themes"
// import { type ThemeProviderProps } from "next-themes/dist/types"


// const Header = dynamic(() => import('../components/shared/Header'), { ssr: false })

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Home`,
  description: 'Best Event Management Website',
  icons: 'https://i.ibb.co/mySk1YY/logo-removebg-preview-modified.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Providers>
        <Header />
        <body className='app'>{children}</body>
        <Footer />
      </Providers>
    </>
  )
}
