"use client";
import React from 'react'
import { UserOutlined } from "@ant-design/icons";
import { useGetAllCustomerQuery } from '@/redux/api/userApi';
import { useGetAllEventQuery } from '@/redux/api/eventApi';

function CustomerData() {
    const { data, isLoading } = useGetAllCustomerQuery({
        limit: 100,
        page: 1,
    });
   
  return (
    <div className="basis-0 flex flex-grow flex-shrink-0 flex-col flex-nowrap rounded-xl bg-white mob:p-10 p-5 m-2 col-span-full sm:col-span-6 xl:col-span-4">
        <div className="flex flex-row flex-nowrap items-center">
        <UserOutlined style={{
            fontSize: "24px",
            color: "#FFA33C"
        }}/>
          <span className="ml-2 font-bold text-2xl text-gray-500">Total Customer</span>
        </div>
        <p className="mt-4 self-center font-bold text-2xl text-oceanblue">
          {/* {<span className="text-xl text-gray-500 font-medium">{ data?.users?.data?.length || 0 }</span>} */}
         
        </p>
        {/* <p className="mt-4 self-center flex flex-row flex-nowrap">
          {increasing ? <TrendingUpIcon className="w-5 h-5 text-notifigreen" /> : <TrendingDownIcon className="w-5 h-5 text-bloodred" />}
          <span className="ml-2 font-bold text-[14px] text-oceanblue">{increasingValue}%</span>
        </p> */}
      </div>
  )
}

export default CustomerData