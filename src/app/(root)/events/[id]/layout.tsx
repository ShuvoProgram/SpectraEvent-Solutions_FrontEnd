import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Event Page',
  description: 'Build To Better',
}

export default function EventLayout( {children}: {  children: React.ReactNode }) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}