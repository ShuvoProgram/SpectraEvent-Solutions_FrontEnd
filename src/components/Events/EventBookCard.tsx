import { IdcardOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import Link from 'next/link'
import React from 'react'

function EventBookCard({price, id}: any) {
  return (
    <div
    style={{
      height: "300px",
      width: "100%",
      margin: "0px 20px",
      padding: "1rem 2rem",
      backgroundColor: "#f5f5f6",
      borderRadius: "10px",
      borderWidth: "1px",
    }}
  >
    <h1 className='text-center text-xl font-semibold sm:text-2xl md:text-3xl'>Book Your Event</h1>
    <div style={{}}>
      <p className='text-xl text-center my-4'>
        Event Budget:
       $ {price}
      </p>
      <p className='text-xl text-orange-500 text-center'>
        inclusive of all taxes {`20`}%
      </p>
      <hr
        style={{
          margin: "1rem 0",
        }}
      />
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 2rem ",
      }}
    >
      <p
        style={{
          fontSize: "20px",
        }}
      >
        Total
      </p>
      <p
        style={{
          fontSize: "20px",
        }}
      >
        $ {" "}
        {parseInt(price) +
          price * (20 / 100)}
      </p>
    </div>
    
    <Link href={`${id}/booking`}>
      <Button
        style={{
          marginTop: "10px",
          width: "100%",
          height: "40px",
          backgroundColor: "#FF9130",
          color: "#fff",
        }}
        // onClick={() => handelBook(service)}
      >
        Book Now
        <IdcardOutlined
          style={{
            marginLeft: "5px",
          }}
        />
      </Button>
    </Link>

    <Button
      style={{
        marginTop: "10px",
        width: "100%",
        height: "40px",
      }}
      onClick={() => message.info("Your inquiry has been sent.")}
    >
      Send Inquiry
    </Button>
  </div>
  )
}

export default EventBookCard