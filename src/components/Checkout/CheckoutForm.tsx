'use client'
import { Col, Row } from 'antd';
import React from 'react'
import FormInput from '../Form/FormInput';
import FormDatePicker from '../Form/FormDatePicker';

type CheckoutFormProps = {
    eventId: string;
    ticketId: string;
    organizerId: string;
  };

function CheckoutForm({ eventId, ticketId, organizerId }: CheckoutFormProps) {
  return (
    <section>
        <form className='container '>
            <div className='checkout flex flex-row lg:row-span-6 md:row-span-2 row-span-1 justify-center'>
                <div className='form-title col-span-8'>
                    <span>01</span>
                    <div>Personal Details</div>
                </div>
            </div>
            <Row 
            justify="center"
            align="middle"
            style={{
                minHeight: "100vh"
            }}
            >
                <Col lg={10} md={16} sm={12}>
                    {/* <FormInput
                    label='Amount'
                    type='text'
                    name='amount'
                    placeholder='Enter Amount'
                    /> */}
                </Col>
                <Col lg={10} md={16} sm={12}>
                    {/* <FormDatePicker
                    name='booking date'
                    /> */}
                </Col>
            </Row>
            <div>
                <div className='checkout flex flex-row lg:row-span-6 md:row-span-2 row-span-1 justify-center'>
                    <div className='form-title col-span-8'>
                        <span>02</span>
                        <div>Ticket Details</div>
                    </div>
                </div>
                <div className='checkout flex flex-row lg:row-span-6 md:row-span-2 row-span-1 justify-center'>
                    <div className='form-title col-span-8'>
                        <span>03</span>
                        <div>Payment Details</div>
                    </div>
                </div>
            </div>
        </form>
    </section>
  )
}

export default CheckoutForm