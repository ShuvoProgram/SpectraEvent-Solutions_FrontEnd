import UpdateProfile from '@/components/Dashboard/User/Profile/UpdateProfile';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: `SpectraEvent-Solutions | Profile Update`,
  description: 'Best Event Management Website',
}

function ProfileUpdatePage() {
 
  return (
    <>
    <BreadCrumb
            items={[
                {
                    label: "update profile",
                    link: "/user/profile",
                }
            ]}
        />
      
      <UpdateProfile/>
    </>
  )
}

export default ProfileUpdatePage;