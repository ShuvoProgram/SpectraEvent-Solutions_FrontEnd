"use client";
import { useGetProfileQuery } from '@/redux/api/userApi';
import React from 'react'
import Spinner from '../shared/Spinner';
import { Button, Card, Col, Input, Row } from 'antd';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';

interface IBookingConfirm {
    newDate: string;
    event: any
}

function BookingConfirmSummary({ event, newDate,}: IBookingConfirm) {
    const {data, isLoading} = useGetProfileQuery({});
    const {title, price} = event;
    
    if(isLoading){
        return <Spinner />
    }
    const {firstName, email, contactNo, address} = data;
    console.log(data)
  return (
    <div
    style={{
        height: "22rem",
        padding: "1rem",
        border: "1px solid #e6e6e6",
        marginTop: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: "#e6e6e6",
      }}
    >
  <Row>
        <Col span={16}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "evenly",
                gap: "1rem",
                width: "100%",
              }}
            >
              <Card
                style={{
                  width: "45%",
                }}
                title="Booking Date"
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <CalendarOutlined
                    style={{
                      fontSize: "2rem",
                      color: "#1890ff",
                    }}
                  />
                  <Meta title={newDate} />
                </div>
              </Card>
            </div>
          </div>
          <div
            style={{
              marginTop: "0.5rem",
            }}
          >
            <Card
              style={{
                width: "92%",
              }}
              title={"Booking Information"}
            >
              <Row>
                <Col span={12}>
                  <p>
                    <b>Name : {firstName} </b>
                  </p>
                  <p>
                    <b>Mobile : {contactNo} </b>
                  </p>
                  <p>
                    <b>Address : {address} </b>
                  </p>
                </Col>
                <Col span={12}>
                  <p>
                    <b>Address : {address} </b>
                  </p>
                  <p>
                    <b>Email : {email} </b>
                  </p>
                  <p>
                    <b>Service Location : {event?.Vanue?.title} </b>
                  </p>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
        <Col span={8}>
          <Card
            style={{
              width: "100%",
            }}
            title="Price Summary"
          >
            <div
              style={{
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <p>
                <b
                  style={{
                    color: "green",
                    fontSize: "1rem",
                  }}
                >
                  {title}
                </b>
              </p>
              <hr />
              <p>
                <b
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  Price :&nbsp; {price} &nbsp;tk
                </b>
              </p>
              <p
                style={{
                  fontSize: "1rem",
                }}
              >
                {/* Tax&nbsp;(%) :&nbsp; {tax}&nbsp; */}
              </p>
            </div>
          </Card>
          <Card
            style={{
              width: "100%",
              marginTop: "0.1rem",
            }}
            title="Offer & Discount"
          >
            <Input
              placeholder="Enter Coupon Code"
              style={{
                width: "70%",
              }}
            />{" "}
            <Button>Apply</Button>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default BookingConfirmSummary