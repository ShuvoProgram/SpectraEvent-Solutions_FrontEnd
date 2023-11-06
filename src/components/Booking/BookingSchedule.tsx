"use client";
import { useGetSingleEventQuery } from '@/redux/api/eventApi';
import React, { useState } from 'react'
import Spinner from '../shared/Spinner';
import { useRouter } from 'next/navigation';
import BookingDate from './BookingDate';
import StepperForm from '../StepperForm/StepperForm';
import BookingConfirmSummary from './BookingConfirmSummary';
import { useAddBookingEventMutation } from '@/redux/api/bookingApi';
import { useGetProfileQuery } from '@/redux/api/userApi';
import { message } from 'antd';

function BookingSchedule({id}: any) {
    const router = useRouter();
    
    const [newDate, setNewDates] = useState<string>("");
    const { data, isFetching } = useGetSingleEventQuery(id);
    const { data: profileData, isLoading } = useGetProfileQuery({});
    const [addBookingEvent] = useAddBookingEventMutation();

    if (isLoading) {
        return <Spinner />
    }
    const steps = [
        {
          title: "Booking Date & InFo",
          content: (
            <BookingDate
              setNewDates={setNewDates}
            />
          ),
        },
        {
            title: "Booking Summary",
            content: (
                <BookingConfirmSummary
                event={data}
                newDate={newDate}
                />
            )
        }
      ];

      const isDataNull = profileData.firstName === undefined && profileData.email === undefined && profileData.contactNo === undefined && profileData.address === undefined;

      const handleStudentSubmit = async (values: any) => {
        const newData = {scheduleDate: newDate, eventId: data?.id}
        
        if(!isDataNull){
            const res = await addBookingEvent(newData).unwrap();
            if(res.id) {
                message.success("Booking Confirmed Successfully");
                router.push("/dashboard");
            }
        } else {
         message.error("Please full-fill your Information")
        }
       
      }

  return (
    <div>
        <h1>BookingSchedule</h1>
        <StepperForm
         persistKey="booking-schedule"
         submitHandler={(value) => {
            handleStudentSubmit(value);
          }}
          steps={steps}
        />
    </div>
  )
}

export default BookingSchedule