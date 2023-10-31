'use client'
import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import { Button, Calendar, Col, Input, Row } from 'antd';
import { useGetProfileQuery, useProfileUpdateMutation } from '@/redux/api/userApi';
import FormInput from '../Form/FormInput';
import Form from '../Form/Form';

interface IBookingDateProps {
  setNewDates: (value: string) => void;
//   setNewData: (value: string) => void;
}

function BookingDate({ setNewDates}: IBookingDateProps) {
  const { data, isLoading } = useGetProfileQuery({});
  const [updateProfile] = useProfileUpdateMutation();
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contactNo, setContactNo] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const onPanelChange = (value: Dayjs) => {
    const date = value.format('YYYY-MM-DD');
    setNewDates(date);
  };

  const defaultValues = {
    firstName: data?.firstName || '',
    email: data?.email || '',
    contactNo: data?.contactNo || '',
    address: data?.address || '',
  };

  const isDataNotNull = data && data.firstName === null && data.email === null && data.contactNo === null && data.address === null;

 // Step 2: Handle the input change event and update the state
 const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  return (
    <div
      style={{
        height: '22rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Calendar fullscreen={false} onChange={onPanelChange} className='w-[300px] border border-gray-300 rounded-lg' />
      </div>
      <div className='w-full mx-10'>
      <Row gutter={[10, 10]}>
            <Col sm={24} md={12} lg={12}>
              <FormInput
                name='firstName'
                type='text'
                size='large'
                label='First Name'
                required
                
              />
            </Col>
            <Col sm={24} md={12} lg={12}>
              <FormInput
                name='email'
                type='text'
                size='large'
                label='Email'
                required
              />
            </Col>
            <Col sm={24} md={12} lg={12}>
              <FormInput
                name='contactNo'
                type='text'
                size='large'
                label='Contact No'
                required
              />
            </Col>
            <Col sm={24} md={12} lg={12}>
              <FormInput
                name='address'
                type='text'
                size='large'
                label='Address'
                required
              />
            </Col>
          </Row>
      </div>
    </div>
  );
}

export default BookingDate;
