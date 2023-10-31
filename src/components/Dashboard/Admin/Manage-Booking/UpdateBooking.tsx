"use client";
import Form from '@/components/Form/Form';
import FormSelectField from '@/components/Form/FormSelectedField';
import Spinner from '@/components/shared/Spinner';
import { bookingStatus } from '@/constants/global';
import { useConfirmBookingMutation, useGetSingleBookingQuery, useUpdateBookingMutation} from '@/redux/api/bookingApi';
import { getUserInfo } from '@/services/auth.service';
import { IDProps } from '@/types'
import { Button, Col, Row, message } from 'antd';
import React from 'react'

function UpdateBooking({params}: IDProps) {
    const {id} = params;

    const {data, isLoading, refetch} = useGetSingleBookingQuery(id);
   console.log(data);

   const [updateBooking] = useUpdateBookingMutation();
   const [confirmBooking] = useConfirmBookingMutation();
   if(isLoading) {
    return <Spinner/>
   }
   const onConfirmBooking = async (data: any) => {
    message.loading("Update booking...")
    try {
        const res = await updateBooking({data, id}).unwrap();
        console.log(res)
        if(res.id) {
          message.success("Booking confirm successfully");
          refetch();
        }
    } catch (error: any) {
        message.error(error.message)
    }
   }

   const handleConfirmBooking = async (data: any) => {
    message.loading("Confirm booking...")
    console.log(data?.id)
    // try {
    //     const res = await confirmBooking(data?.id).unwrap();
    //     console.log(res)
    //     if(res.id) {
    //       message.success("Booking confirm successfully");
    //       refetch();
    //     }
    // } catch (error: any) {
    //     message.error(error.message)
    // }
   }

  return (
    <div>
      <h1>Update Booking</h1>
      {/* <Form submitHandler={onConfirmBooking}>
      <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <p>Current Booking Status: {data?.status}</p>
          </Col>
        </Row>

        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <h1>Booking Status: </h1>
            <FormSelectField
            name='status'
            label='Booking Status'
            options={bookingStatus}
            />
          </Col>
        </Row>
        <Button type='primary' htmlType='submit'>Confirm Booking</Button>
      </Form> */}
      <Button onClick={() => handleConfirmBooking(data?.id)}>Confirm Booking</Button>
    </div>
  )
}

export default UpdateBooking