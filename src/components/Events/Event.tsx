"use client"
import React from 'react'
import Image from 'next/image'
import { CalendarOutlined, EnvironmentOutlined, GroupOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import EventBookCard from './EventBookCard';
import Reviews from '../shared/Reviews';
import dayjs from "dayjs";

function Event({data}: any) {
 const publishedDate = dayjs(data?.createdAt).format("MMM D, YYYY")
  return (
    <div className='mt-40 md:mt-4 lg:mt-4'>
    <div className="container">
    <div className="mt-20 flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">{data?.title}</h1>
      <p className="mt-4 flex items-center text-gray-400">
      <CalendarOutlined  className='mr-2'/>
        <span>{publishedDate}</span>
        <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
        <GroupOutlined className='mr-2'/>
        <span>{data?.Category?.name}</span>
        <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
        <EnvironmentOutlined className='mr-2'/>
        <span>{data?.Vanue?.title}</span>
      </p>
    </div>
    <div className="mt-10">
    <div className="overflow-hidden rounded-xl">
            <Image src={data?.eventImg} height={320} width={280} layout="responsive" alt={data?.title} />
          </div>
    </div>
    <Row className="my-10">
      <Col sm={12} md={24} lg={16}>
      <div>
      <h3 className="text-xl font-semibold">Summary</h3>
      <p dangerouslySetInnerHTML={{__html: data?.description}} className="mt-4"/>
      <h3 className="mt-10 text-xl font-semibold">Feature List</h3>
      <div className="mt-4 list-disc pl-4">
        <p dangerouslySetInnerHTML={{__html: data?.facility}}/>
      </div>
    </div>
      </Col>
      <Col sm={12} md={8} lg={8}>
      <EventBookCard price={data?.price} id={data?.id} isBooked={data?.isBooked}/>
      </Col>
    </Row>
  </div>
 <div className='container py-14'>
 <Reviews id={data.id}/>
 </div>
    </div>
  )
}

export default Event