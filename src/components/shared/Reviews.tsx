"use client";
import React, { useState } from 'react'
import Form from '../Form/Form';
import { Button, Col, Rate, Row, message } from 'antd';
import FormTextArea from '../Form/FormTextArea';
import { useCreateReviewMutation,} from '@/redux/api/reviewApi';
import { useGetSingleEventQuery } from '@/redux/api/eventApi';
import Spinner from '../Loading/Spinner';
import { useGetSingleCustomerQuery } from '@/redux/api/userApi';

function Reviews({id}: any) {
    const [value, setValue] = useState(0);
    const [userName, setUserName] = useState<string | null>(null);
    const [createReview] = useCreateReviewMutation();
    const {data, isLoading, refetch} = useGetSingleEventQuery(id);
    if(isLoading) {
      return <Spinner/>
  }
  
  const reviewData = data?.Review;
  
    const handleReview = async (values: any) => {
      const data = {
          rating: value,
          comment: values.review,
          eventId: id
      }
      try {
          const res = await createReview(data).unwrap();
          if(res.id){
              message.success("Review created successfully!");
              refetch()
          } else {
            message.error("Review created Unsuccessfully!");
          }
        } catch (err: any) {
            message.error(err.message);
        }
    };
    
   

    return (
        <div className="w-full bg-white rounded-lg border p-2">
            <h3 className="font-bold">Discussion</h3>
            <div>
                <div className="flex flex-col">
                    {
                        reviewData?.length !== 0 &&
                         reviewData?.map((review: any) => (
                            <div className="border rounded-md p-3 ml-3 my-3" key={review.id}>
                            <div className="flex gap-3 items-center">
                                <img src="https://avatars.githubusercontent.com/u/22263436?v=4"
                                    className="object-cover w-8 h-8 rounded-full 
                                border-2 border-emerald-400  shadow-emerald-400
                                "/>
                                <h3 className="font-bold">
                                    {review?.user?.firstName}
                                </h3>
                            </div>
                            <p className="text-gray-600 mt-2">
                               {review?.comment}
                            </p>
    
                        </div>
                         ))
                    }
                    <div className="w-full px-3 my-2">
        <Form submitHandler={handleReview}>
          <Row style={{
            display: "flex",
            flexDirection: "column",
          }}>
            <Col
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '10px 0px',
              }}
            >
              <h3 className="mr-4 font-serif">Rating:</h3>
              <Rate onChange={setValue} value={value} />
            </Col>
            <Col md={24}>
              <FormTextArea
                name="review"
                placeholder="Write a Review"
                rows={6}
              />
            </Col>
            <Col md={24}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  margin: '10px 0px',
                  backgroundColor: '#FF5B22',
                }}
              >
                Post Review
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews