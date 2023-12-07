"use client"
import React, { useState } from 'react';
import { Col, Row } from 'antd'
import { BiCommentDetail, BiPhotoAlbum } from 'react-icons/bi';
import { MdOutlineArticle, MdOutlinePhoto } from 'react-icons/md';
import { AiOutlineStar, AiOutlineTeam } from 'react-icons/ai';
import Icon from '@ant-design/icons';
import WelcomeBanner from './WelcomeBanner';
import StateCard from './stateCard';
import RecentActivity from './RecentActivity';
import { useGetAllCustomerQuery } from '@/redux/api/userApi';
import { useGetAllEventQuery } from '@/redux/api/eventApi';
import { useGetAllBlogQuery } from '@/redux/api/blogApi';
import { useGetAllBookingQuery } from '@/redux/api/bookingApi';
import { useGetAllCategoryQuery } from '@/redux/api/categoryApi';

function Dashboard() {
    const [loading, setLoading] = useState<boolean>(true);
    const { data, isLoading } = useGetAllCustomerQuery({
        limit: 100,
        page: 1,
    });
    const {data: EventData} = useGetAllEventQuery({
        limit: 100,
        page: 1
    });

    const { data: BlogData } = useGetAllBlogQuery({
        limit: 100,
        page: 1
    });

    const { data: BookingData } = useGetAllBookingQuery({
        limit: 100,
        page: 1
    });

    const { data: CategoryData } = useGetAllCategoryQuery({
        limit: 100,
        page: 1
     });

    // console.log(CategoryData?.Category?.length);
  return (
    <div className="flex h-screen overflow-hidden">
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Welcome banner */}
          <WelcomeBanner />
           {/* Cards */}
           
           <Row gutter={24}>
      <Col xl={6} lg={6} md={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
        <StateCard
          loading={isLoading}
          icon={<Icon component={AiOutlineTeam} />}
          title="Users"
           // @ts-ignore
          number={data?.users?.length}
        />
      </Col>
      <Col xl={6} lg={6} md={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
        <StateCard
          loading={isLoading}
          icon={<Icon component={MdOutlineArticle} />}
          title="Events"
           // @ts-ignore
          number={EventData?.event?.data?.length}
        />
      </Col>
      <Col xl={6} lg={6} md={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
        <StateCard
          loading={isLoading}
          icon={<Icon component={MdOutlineArticle} />}
          title="Blogs"
           // @ts-ignore
          number={BlogData?.blog?.data?.length}
        />
      </Col>
      <Col xl={6} lg={6} md={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
        <StateCard
          loading={isLoading}
          icon={<Icon component={MdOutlinePhoto} />}
          title="Booking"
           // @ts-ignore
          number={BookingData?.booking?.data?.length}
        />
      </Col>
      <Col xl={6} lg={6} md={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
        <StateCard
          loading={isLoading}
          icon={<Icon component={BiCommentDetail} />}
          title="Comments"
          number={500}
        />
      </Col>
      <Col xl={6} lg={6} md={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
        <StateCard
          loading={isLoading}
          icon={<Icon component={AiOutlineStar} />}
          title="Category"
           // @ts-ignore
          number={CategoryData?.Category?.length}
        />
      </Col>
    </Row>
    <div className="grid grid-cols-12 gap-6">
            <RecentActivity/>
           </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard;