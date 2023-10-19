import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Login`,
    description: 'Best Event Management Website',
  }

export default function LoginLayout( {children}: {  children: React.ReactNode }) {
  return (
    <div>
        <Header />
        {children}
        <Footer/>
    </div>
  )
}