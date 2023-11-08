"use client";
import Form from '@/components/Form/Form'
import FormDatePicker from '@/components/Form/FormDatePicker';
import FormInput from '@/components/Form/FormInput'
import FormSelectField from '@/components/Form/FormSelectedField'
import FormTextArea from '@/components/Form/FormTextArea';
import Spinner from '@/components/Loading/Spinner';
import BreadCrumb from '@/components/shared/BreadCrumb';
import UploadImage from '@/components/shared/UploadImage';
import { bloodGroupOptions, genderOptions } from '@/constants/global'
import { useGetProfileQuery, useProfileUpdateMutation } from '@/redux/api/userApi'
import { setToLocalStorage } from '@/utils/local-storage';
import { Button, Col, Row, UploadProps, message } from 'antd'
import { UploadChangeParam, UploadFile } from 'antd/es/upload';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function UpdateProfile() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { data: userDate, isLoading } = useGetProfileQuery({});
  const [updateProfile] = useProfileUpdateMutation();
  const router = useRouter()

  if(isLoading) {
    return <Spinner/>
  }

  const handleChange: UploadProps["onChange"] = async (
    info: UploadChangeParam<UploadFile>
  ) => {
    const image = info.file.originFileObj;
    const formData = new FormData();
    formData.append("image", image as Blob);
    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                params: {
                    key: process.env.NEXT_PUBLIC_IMGBB_KEY,
                },
                }
      );

      setImageUrl(response.data.data.display_url);
    } catch (error) {
      console.error("Error uploading image to ImageBB:", error);
    }
  };

  const onSubmit = async (values: any) => {
    try {
      values.profileImage = imageUrl;
      const res = await updateProfile({body: values}).unwrap();
      if (res?.id) {
        message.success("User Successfully Updated!");
        router.push('/user/profile')
      }
    } catch (error: any) {
      message.error(error.message)
    }
  }



  const defaultValue = {
    firstName: userDate?.firstName || "",
    middleName: userDate?.middleName || "",
    lastName: userDate?.lastName || "",
    address: userDate?.address || "",
    contactNo: userDate?.contactNo || "",
    dateOfBirth: userDate?.dateOfBirth || "",
    gender: userDate?.gender || "",
    bio: userDate?.bio || "",
    bloodGroup: userDate?.bloodGroup || ""
  }
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
      }}
    >
      <BreadCrumb
        items={[
          {
            label: "update profile",
            link: "/user/profile",
          }
        ]}
      />
      <p
        style={{
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        Update Profile
      </p>
      
      <Form submitHandler={onSubmit} defaultValues={defaultValue}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="firstName"
              size="large"
              label="First Name"
            />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="middleName"
              size="large"
              label="Middle Name"
            />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="lastName"
              size="large"
              label="Last Name"
            />
          </Col>

          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectField
              size="large"
              name="gender"
              options={genderOptions}
              label="Gender"
              placeholder="Select"
            />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectField
              size="large"
              name="bloodGroup"
              options={bloodGroupOptions}
              label="Blood Group"
              placeholder="Select"
            />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="number"
              name="contactNo"
              size="large"
              label="Contact No"
            />
          </Col>
          <Col
            className='gutter-row'
            span={12}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormDatePicker
              name='dateOfBirth'
              label='Date Of Birth'
              size='large'
            />
          </Col>
          <Col
            className='gutter-row'
            span={12}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              name='address'
              placeholder='Address'
              label='Address'
              size='large'
            />
          </Col>
          <Col
            className='gutter-row'
            span={24}
            style={{
              marginBottom: "10px",
            }}
          >
           <UploadImage label='Image' name="profileImage" imageUrl={imageUrl} handleChange={handleChange}/>
          </Col>
          <Col
            className='gutter-row'
            span={24}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormTextArea
              name='bio'
              placeholder='About Your Self'
              rows={4}
              label='About'
            />
          </Col>
        </Row>
        <Button htmlType='submit' type='primary' danger>
          Update Profile
        </Button>
      </Form>
    </div>
  )
}

export default UpdateProfile