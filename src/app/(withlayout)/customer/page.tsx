import { Metadata } from "next";

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Dashboard`,
    description: 'Best Event Management Website',
}

const customer = () => {
    return (
        <div className='pt-28'>
            <h1 className="text-6xl">Profile</h1>
        </div>
    )
}

export default customer;