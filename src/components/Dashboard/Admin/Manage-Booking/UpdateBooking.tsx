"use client";
import BreadCrumb from '@/components/shared/BreadCrumb';
import Spinner from '@/components/shared/Spinner';
import { useCancelBookingMutation, useConfirmBookingMutation, useGetSingleBookingQuery, useUpdateBookingMutation} from '@/redux/api/bookingApi';
import { useGetSingleCategoryQuery } from '@/redux/api/categoryApi';
import { useGetSingleVanueQuery } from '@/redux/api/vanueApi';
import { getUserInfo } from '@/services/auth.service';
import { IDProps } from '@/types'
import { Button, Col, Row, message } from 'antd';
import React from 'react'

function UpdateBooking({params}: IDProps) {
    const {id} = params;
    const { role } = getUserInfo() as any;
    const {data, isLoading, refetch} = useGetSingleBookingQuery(id);
    const {data: categoryData} = useGetSingleCategoryQuery(data?.Event?.CategoryId);
    const {data: venueData} = useGetSingleVanueQuery(data?.Event?.vanueId);
  
   const [confirmBooking] = useConfirmBookingMutation();
   const [cancelBooking] = useCancelBookingMutation();
   if(isLoading) {
    return <Spinner/>
   }
   const handleCancelBooking = async (data: any) => {
    message.loading("Cancel booking...")
    try {
        const res = await cancelBooking(data).unwrap();
        if(res.id) {
          message.success("Booking cancel successfully");
          refetch();
        }
    } catch (error: any) {
        message.error(error.message)
    }
   }

   const handleConfirmBooking = async (data: any) => {
    message.loading("Confirm booking...")
    try {
        const res = await confirmBooking(data).unwrap();
        if(res.id) {
          message.success("Booking confirm successfully");
          refetch();
        }
    } catch (error: any) {
        message.error(error.message)
    }
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
                        label: "Admin",
                        link: `/${role}`,
                    },
                    {
                        label: "Manage-Booking",
                        link: `/${role}/manage-booking`,
                    },
                ]}
            />
      <h1 className='text-xl font-bold my-5'>Booking Information</h1>
      <Row>
        <Col md={12}>
        <Col md={24} style={{ margin: "10px 0" }}>
            <p >Current Booking Event Name: {data?.Event?.title}</p>
          </Col>
          <Col md={24} style={{ margin: "10px 0" }}>
            <p >Current Booking Event Category: {categoryData?.name}</p>
          </Col>
          <Col md={24} style={{ margin: "10px 0" }}>
            <p >Current Booking Event Venue: {venueData?.title}</p>
          </Col>
          <Col md={24} style={{ margin: "10px 0" }}>
            <p >Current Booking Event people: {data?.Event?.people}</p>
          </Col>
          <Col md={24} style={{ margin: "10px 0" }}>
            <p >Current Booking Event price: {data?.Event?.price}</p>
          </Col>
          <Col md={24} style={{ margin: "10px 0" }}>
            <p >Current Booking Status: {data?.status}</p>
          </Col>
         
        </Col>
          <Col md={12}>
          <Col md={24} style={{ margin: "10px 0" }}>
            <p >Current Booking Customer Name: {data?.user?.firstName} {data?.user?.middleName} {data?.user?.lastName}</p>
          </Col>
          <Col md={24} style={{ margin: "10px 0" }}>
            <p >Current Booking Customer Email: {data?.user?.email}</p>
          </Col>
          <Col md={24} style={{ margin: "10px 0" }}>
            <p >Current Booking Customer Contact No: {data?.user?.contactNo}</p>
          </Col>
          <Col md={24} style={{ margin: "10px 0" }}>
            <p >Current Booking Customer Address: {data?.user?.address}</p>
          </Col>
          </Col>
          <Col span={8} 
          style={{ 
            margin: "10px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
           }}
          >
            <h1>Booking Status: </h1>
            <Button 
            type='primary'
            onClick={() => handleConfirmBooking(data?.id)}
            style={{
              marginLeft: "10px",
              backgroundColor: "#54B435"
            }}
            >Confirm Booking</Button>
          </Col>
          <Col span={8} 
          style={{ 
            margin: "10px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
           }}
          >
            <h1>Booking Status: </h1>
            <Button
            type='primary'
             onClick={() => handleCancelBooking(data?.id)}
            style={{
              marginLeft: "10px"
            }}
            danger
            >Cancel Booking</Button>
          </Col>
        </Row>
      
    </div>
  )
}

export default UpdateBooking