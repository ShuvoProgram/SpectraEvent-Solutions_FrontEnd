"use client";
import { useGetSingleEventQuery } from '@/redux/api/eventApi'
import React from 'react'
import Spinner from '../shared/Spinner';
import Image from 'next/image';
import { Rate } from 'antd';

function BookingInformation({ id }: any) {
    const { data, isLoading } = useGetSingleEventQuery(id);

    if (isLoading) {
        return <Spinner />
    }
    // console.log(data);
    const totalReview = Array.isArray(data?.review) ? data?.review.length : 0;
    // Calculate the sum of ratings
    const sumOfRatings = Array.isArray(data?.review)
        ? data?.review.reduce((total: any, rv: any) => total + rv.rating, 0)
        : 0;

    // Calculate the average rating
    const averageRating = totalReview > 0 ? sumOfRatings / totalReview : 0;

    const desc = data?.description ? data?.description.slice(0, 1000) : "";
    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-semibold text-center'>BookingInformation</h1>
            <div
                style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem",
                    height: "350px",
                }}
            >
                <div style={{
                    width: "40%"
                }}>
                    <Image
                        style={{ height: "100%", width: "100%", borderRadius: "10px" }}
                        src={data?.eventImg}
                        width={400}
                        height={200}
                        alt="Picture of the author"
                    />
                </div>
                <div
                    style={{
                        width: "60%",
                        height: "15rem",
                    }}
                >

                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: "1rem",
                        }}
                    >
                        <div>
                            <p
                                style={{
                                    backgroundColor: "#FF9130",
                                    color: "white",
                                    padding: "5px",
                                    width: "fit-content",
                                    borderRadius: "5px",
                                }}
                            >
                                {data?.Category?.name}
                            </p>
                        </div>

                        <div>
                            <h1
                                style={{
                                    fontSize: "2rem",
                                }}
                            >
                                {data?.title}
                            </h1>
                            <p
                                style={{
                                    backgroundColor: "skyBlue",
                                    color: "white",
                                    padding: "5px",
                                    width: "fit-content",
                                    borderRadius: "5px",
                                }}
                            >
                                {data?.Vanue?.title}
                            </p>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <div className='flex items-center my-2'>
                                    <Rate disabled defaultValue={averageRating} />
                                </div>
                                <p
                                    style={{
                                        fontSize: "16px",
                                        color: "gray",
                                        marginTop: "5px",
                                    }}
                                >( {totalReview} Reviews )</p>
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold'>Price {data?.price} Tk</h2>
                              0
                            </div>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: desc }} className='my-4'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingInformation