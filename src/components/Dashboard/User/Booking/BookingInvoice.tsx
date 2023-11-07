"use client";
import Spinner from '@/components/Loading/Spinner';
import ActionBar from '@/components/shared/ActionBar';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { useReactToPrint } from 'react-to-print';
import { useGetSingleBookingQuery } from '@/redux/api/bookingApi';
import { useGetSingleVanueQuery } from '@/redux/api/vanueApi';
import { IDProps, Invoice } from '@/types';
import dayjs from "dayjs";
import Image from 'next/image';
import React, { useRef } from 'react';
import { message } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';

function BookingInvoice({params}: IDProps) {
    const componentRef = useRef<any>(); // Change `any` to the appropriate type of your component reference

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'course-details',
    onAfterPrint: () => message.success("Print Success!"),
  });

    const {data, isLoading} = useGetSingleBookingQuery(params);
    const {data: venueData} = useGetSingleVanueQuery(data?.Event?.vanueId)
    if(isLoading) {
        return <Spinner/>
    }
    
    const BookingInvoiceDate = dayjs(data.createdAt).format("MMM D, YYYY");
    const InvoiceId = data?.id.slice(0, 10);
    
    console.log(data)
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
            <ActionBar title="My Booking List">
            <div className='w-48 flex justify-evenly'>
                                
                                <button onClick={handlePrint} className='flex justify-between items-center p-2 bg-[#FF5B22] rounded-lg text-white font-serif'>
                                <span>DownLoad To PDF</span>
                                    <CloudDownloadOutlined  className='h-6 w-6' />
                                    </button>
                            </div>
            </ActionBar>
            <div className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-xl mx-auto" ref={componentRef}>
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                        <Image width={100} height={100} className="h-8 w-8 mr-2" src="https://i.ibb.co/mySk1YY/logo-removebg-preview-modified.png"
                            alt="Logo" />
                        <div className="text-gray-700 font-semibold text-lg">SpectraEvent Solution</div>
                    </div>
                    <div className="text-gray-700">
                        <div className="font-bold text-xl mb-2">INVOICE</div>
                        <div className="text-sm">Date: {BookingInvoiceDate}</div>
                        <div className="text-sm">Invoice #: {InvoiceId}</div>
                    </div>
                </div>
                <div className="border-b-2 border-gray-300 pb-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4">Bill To:</h2>
                    <div className="text-gray-700 mb-2">{data?.user?.firstName} {data?.user?.middleName} {data?.user?.lastName}</div>
                    <div className="text-gray-700 mb-2">Address: {data?.user?.address}</div>
                    <div className="text-gray-700 mb-2">Contact No: {data?.user?.contactNo}</div>
                    <div className="text-gray-700">Email: {data?.user?.email}</div>
                </div>
                <table className="w-full text-left mb-8">
                    <thead>
                        <tr>
                            <th className="text-gray-700 font-bold uppercase py-2">Event Name</th>
                            <th className="text-gray-700 font-bold uppercase py-2">Venue</th>
                            <th className="text-gray-700 font-bold uppercase py-2">Schedule Date</th>
                            <th className="text-gray-700 font-bold uppercase py-2">Budget</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-4 text-gray-700">{data?.Event?.title}</td>
                            <td className="py-4 text-gray-700">{venueData?.title}</td>
                            <td className="py-4 text-gray-700">{data?.scheduleDate}</td>
                            <td className="py-4 text-gray-700">$ {data?.Event?.price}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-end mb-8">
                    <div className="text-gray-700 mr-2">Total:</div>
                    <div className="text-gray-700 font-bold text-xl">$ {data?.Event?.price}</div>
                </div>
                <div className="border-t-2 border-gray-300 pt-8 mb-8">
                    <div className="text-gray-700 mb-2">Payment is due within 30 days. Late payments are subject to fees.</div>
                    <div className="text-gray-700 mb-2">Please make checks payable to Your Company Name and mail to:</div>
                    <div className="text-gray-700">123 Main St., Anytown, USA 12345</div>
                </div>
            </div>
        </div>
    )
}

export default BookingInvoice;