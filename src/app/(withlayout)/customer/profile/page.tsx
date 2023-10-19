import Hero from '@/components/Home/Hero';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Profile`,
    description: 'Best Event Management Website',
}

const ProfilePage = () => {
    return (
        <div className='pt-28'>
        <h1>Profile page</h1>
        </div>
    )
}

export default ProfilePage;
