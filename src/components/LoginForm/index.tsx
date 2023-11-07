'use client'
import { useLoginMutation } from '@/redux/api/authApi';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { SubmitHandler } from 'react-hook-form';
import Form from '../Form/Form';
import FormInput from '../Form/FormInput';
import { Button, message } from 'antd';
import { storeUserInfo } from '@/services/auth.service';
import Image from 'next/image';
import loginImg from '../../../public/images/login.gif';
import { Col, Row } from 'antd';
import Link from 'next/link';

interface LoginFormInputs {
    email: string;
    password: string;
}

export default function LoginFrom() {
    const [login] = useLoginMutation();
    const router = useRouter();

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data: any) => {
       
        try {
            const res = await login({ ...data }).unwrap();
            
            if (res?.accessToken) {
                router.push("/");
                message.success("User logged in successfully")
            }
            storeUserInfo({ accessToken: res?.accessToken });
        } catch (error: any) {
            console.error(error.message);
        }
    }
    return (
        <Row
            justify="center"
            align="middle"
            style={{
                minHeight: "100vh"
            }}
        >
            <Col sm={12} md={16} lg={10}>
                <Image src={loginImg} width={400} height={400} alt='login' />
            </Col>
            <Col sm={12} md={8} lg={8}>
                <h1
                    style={{
                        margin: "15px 0px"
                    }}
                >Login Your Account</h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div className='mb-5'>
                            <FormInput
                                name="email"
                                type="text"
                                size="large"
                                label="Email"
                                required
                            />
                        </div>
                        <div
                            style={{
                                margin: "15px 0px"
                            }}
                        >
                            <FormInput
                                name="password"
                                type="password"
                                size="large"
                                label="Password"
                                required
                            />
                        </div>
                        <Button type='primary'
                            htmlType='submit'
                            danger
                        >
                            Login
                        </Button>
                    </Form>
                </div>
                <div style={{
                    display: "flex"
                }}>
                    <p>Do you have any account?</p>
                    <Link href={'/registration'}>Create an account</Link>
                </div>

            </Col>
        </Row>

    )
}
