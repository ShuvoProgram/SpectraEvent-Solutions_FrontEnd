'use client'
import { Button, Col, Row, message } from 'antd'
import React, { useState } from 'react'
import registraImg from '../../../public/images/signup.png'
import Image from 'next/image'
import Form from '@/components/Form/Form';
import { SubmitHandler } from 'react-hook-form';
import FormInput from '@/components/Form/FormInput';
import { useRouter } from 'next/navigation';
import { storeUserInfo } from '@/services/auth.service';
import { useUserRegisterMutation } from '@/redux/api/authApi';
import { USER_ROLE } from '@/constants/role'

interface RegisterFormInputs {
    email: string;
    password: string;
    role: string;
}

export default function RegistrationFrom() {
    const [userRegister] = useUserRegisterMutation();
    const router = useRouter();

    const onSubmit = async (data: any) => {
        try {
            const res = await userRegister({ ...data}).unwrap();
            if (res?.email) {
                message.success('Successfully Registration')
                router.push("/login");
            }
        } catch (error: any) {
            console.error(error.message);
        }
    }
    return (
        <Row
            justify="center"
            align="middle"
            style={{
                minHeight: "100vh",
                padding: "80px 0px"
            }}
        >
            <Col sm={12} md={16} lg={10}>
                <Image src={registraImg} width={500} alt='registration' />
            </Col>
            <Col sm={12} md={16} lg={10}>
                <div>
                    <Form submitHandler={onSubmit}>
                        <Row 
                        >
                        <Col sm={12} md={16} lg={10}
                        style={{
                            marginRight: '10px',
                        }}
                        >
                            <FormInput
                                name='firstName'
                                type='text'
                                size='large'
                                label='First Name'
                                required
                            />
                        </Col>
                        <Col sm={12} md={16} lg={10}>
                            <FormInput
                                name='lastName'
                                type='text'
                                size='large'
                                label='Last Name'
                                required
                            />
                        </Col>
                        <Col sm={12} md={16} lg={20}
                        style={{
                            marginTop: "20px"
                        }}
                        >
                            <FormInput
                                name='email'
                                type='text'
                                size='large'
                                label='Email'
                                required
                            />
                        </Col>
                        <Col
                        sm={12} md={16} lg={20}
                        style={{
                            marginBottom: "20px",
                            marginTop: "20px"
                        }}
                        >
                            <FormInput
                                name="password"
                                type="password"
                                size="large"
                                label="Password"
                                required
                            />
                        </Col>
                        </Row>
                        <Button type="primary" danger htmlType="submit">
                            Registration
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}