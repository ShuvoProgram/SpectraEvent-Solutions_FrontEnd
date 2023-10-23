// "use client"
import Spinner from '@/components/shared/Spinner'
import { useGetProfileQuery } from '@/redux/api/userApi'
import { EditOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BsBriefcase} from "react-icons/bs"

function Profile() {
    const {data, isLoading} = useGetProfileQuery({})
    if(isLoading) {
        return <Spinner/>
    }
  return (
    
    <section className="pt-16 bg-blueGray-50">
    <div className="w-full px-4 mx-auto">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
             <Link href={`/user/profile/update`} className='absolute right-4 top-4'>
                        <button className="flex items-center gap-2 bg-orange-500 text-white font-bold py-1 px-2 rounded mr-2">
                            Edit
                            <EditOutlined />
                        </button>
                    </Link>
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
                {
data?.profileImage ? (
    <Image width={150} height={100} alt="profile-image" src={data?.profileImage || 'https://i.ibb.co/rGZtkFD/950-9501518-our-terms-working-with-you-professional-boy-image.jpg'} className="shadow-xl rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
) : (
    <Avatar className='-m-16 -ml-20 lg:-ml-16 max-w-150-px' size={100} icon={<UserOutlined />} />
)
            }
                
            </div>
          </div>
          <div className="text-center mt-24">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {data?.firstName} {data?.lastName}
            </h3>
            <div className="flex mb-2 text-blueGray-600 justify-center">
                <BsBriefcase className="mr-2 text-lg text-blueGray-400"/>
                {data?.role || ""} 
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              University of Computer Science
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
              <table className="text-sm">
                    <tbody>
                        <div>
                            <tr>
                                <td className="px-10 py-2 text-gray-700 font-bold">ID</td>
                                <td className="px-10 py-2">{data?.id || ""}</td>
                            </tr>
                            <tr>
                                <td className="px-10 py-2 text-gray-700 font-bold">Email</td>
                                <td className="px-10 py-2">{data?.email || ""}</td>
                            </tr>
                            <tr>
                                <td className="px-10 py-2 text-gray-700 font-bold">Contact No</td>
                                <td className="px-10 py-2">{data?.contactNo || ""}</td>
                            </tr>
                            <tr>
                                <td className="px-10 py-2 text-gray-700 font-bold">Present Address</td>
                                <td className="px-10 py-2">{data?.address || ""}</td>
                            </tr>
                            <tr>
                                <td className="px-10 py-2 text-gray-700 font-bold">Date Of Birth</td>
                                <td className="px-10 py-2">{data?.dateOfBirth || ""}</td>
                            </tr>
                            <tr>
                                <td className="px-10 py-2 text-gray-700 font-bold">Gender</td>
                                <td className="px-10 py-2">{data?.gender || ""}</td>
                            </tr>
                            <tr>
                                <td className="px-10 py-2 text-gray-700 font-bold">Blood Group</td>
                                <td className="px-10 py-2">{data?.bloodGroup || ""}</td>
                            </tr>
                        </div>
                    </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Profile