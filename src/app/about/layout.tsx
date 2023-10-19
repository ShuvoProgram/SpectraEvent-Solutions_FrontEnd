import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | About Us`,
    description: 'Best Event Management Website',
  }

export default function AboutLayout( {children}: {  children: React.ReactNode }) {
  return (
    <div>
        <Header />
        {children}
        <Footer/>
    </div>
  )
}