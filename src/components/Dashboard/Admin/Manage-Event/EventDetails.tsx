"use client";
import BreadCrumb from '@/components/shared/BreadCrumb';
import Spinner from '@/components/shared/Spinner';
import { useGetSingleEventQuery } from '@/redux/api/eventApi';
import { IDProps } from '@/types';
import { Col, Row } from 'antd';
import React from 'react';
import {GroupOutlined, ProjectOutlined } from "@ant-design/icons"

function EventDetails({params}: IDProps) {
    const {id} = params;
    const { data, isLoading } = useGetSingleEventQuery(id);
    // const {data: adminData} = useGetSingleAdminQuery(data?.adminId);

    if(isLoading) {
      return <Spinner/>
  }

  return (
    <div
    style={{
      border: "1px solid #d9d9d9",
      borderRadius: "5px",
      padding: "15px",
      marginBottom: "10px",
      marginTop: "10px",
    }}
    >
      <BreadCrumb
         items={[
            {
              label: "admin",
              link: "/admin",
            },
          ]}
        />
        <h1 style={{ fontSize: "22px", fontWeight: "500", margin: "5px 0px" }}>Event Information</h1>
        <div>
          <Row>
            <Col sm={24} md={10} lg={12} style={{ margin: "10px 0", display: "flex", alignItems: "center"}}>
            <ProjectOutlined className='mr-2'/>
              <p className='text-lg'>Event Name: {data?.title}</p>
            </Col>
            <Col sm={24} md={10} lg={12} style={{ margin: "10px 0", display: "flex", alignItems: "center"}}>
            <GroupOutlined className='mr-2'/>
            <p className='text-lg'>Event Category Name: {data?.Category?.name}</p>
            </Col>
            <Col sm={24} md={10} lg={12} style={{ margin: "10px 0" }}>
            <div className='text-lg flex'>Event Booked: {
              data?.isBooked === true ? (
                <p className='ml-2'>Booked</p>
              ) : (
                <p className='ml-2'>Available</p>
              )
            }</div>
            </Col>
            <Col sm={24} md={10} lg={12} style={{ margin: "10px 0" }}>
            <p className='text-lg'>Event Vanue: {data?.Vanue?.title}</p>
            </Col>
            <Col sm={24} md={10} lg={12} style={{ margin: "10px 0" }}>
            <p className='text-lg'>Event Created Admin: {data?.Admin?.email}</p>
            </Col>
            <Col sm={24} md={10} lg={12} style={{ margin: "10px 0" }}>
            <p className='text-lg'>Event Budget: {data?.price}</p>
            </Col>
            <Col sm={24} md={10} lg={12} style={{ margin: "10px 0" }}>
            <p className='text-lg'>Event MaxCapacity: {data?.maxCapacity}</p>
            </Col>
            <Col sm={24} md={10} lg={16} style={{ margin: "10px 0" }}>
              <div className='flex text-lg'>
                <span>Facility:</span>
            <span dangerouslySetInnerHTML={{__html: data?.facility}} className='text-lg ml-2'/>
              </div>
            </Col>
            <Col sm={24} md={10} lg={16} style={{ margin: "10px 0" }}>
              <div className='flex text-lg'>
                <span>Description:</span>
            <span dangerouslySetInnerHTML={{__html: data?.description}} className='text-lg ml-2'/>
            </div>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default EventDetails
