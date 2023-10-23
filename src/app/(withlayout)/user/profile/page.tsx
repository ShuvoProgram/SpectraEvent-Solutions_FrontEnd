import Profile from '@/components/Dashboard/User/Profile/Profile';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: `SpectraEvent-Solutions | Profile`,
    description: 'Best Event Management Website',
  }

const ProfilePage = () => {

    return (
        <>
        <BreadCrumb
            items={[
                {
                    label: "Profile",
                    link: "/user/profile",
                }
            ]}
        />
        <Profile/>
    </>
    )
}

export default ProfilePage;