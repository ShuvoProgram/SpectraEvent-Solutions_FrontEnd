"use client";
import React from 'react'
import Form from '../Form/Form';
import FormInput from '../Form/FormInput';
import FormTextArea from '../Form/FormTextArea';
import { Button, message } from 'antd';
import { useCreateFeedbackMutation } from '@/redux/api/feedbackApi';

function FeedbackForm() {
  const [createFeedback] = useCreateFeedbackMutation();

  const handleFeedback = async (values: any) => {
    console.log(values)
    try {
    const res = await createFeedback(values).unwrap();
    if(res.id){
      message.success('Send Your Feedback')
    }
    } catch (error: any) {
      message.error(error.message)
    }
  }
  return (
   <section className="body-font relative font-serif">
  <div className="container mx-auto px-5 py-24">

    <div className="mb-12 flex w-full flex-col text-center">
      <h1 className="mb-4 text-2xl font-medium text-[#FF5B22] sm:text-3xl">Feedback Us</h1>
      <p className="mx-auto text-base leading-relaxed lg:w-2/3">Feel free to reach out to us! Whether you have a question,
        feedback, or a collaboration proposal, wed love to hear from you.
      </p>
    </div>

    <div className="mx-auto md:w-2/3 lg:w-1/2">
      <Form submitHandler={handleFeedback} >
        <div className="-m-2 flex flex-wrap">
        <div className="w-1/2 p-2">
          <div className="relative">
           <FormInput
           name="name"
           label="Name"
           type="text"
           />
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="relative">
           <FormInput
           name='email'
           label="Email"
           type="email"
           />
          </div>
        </div>
        <div className="mt-4 w-full p-2">
          <div className="relative">
           <FormTextArea
           name='message'
           label="Message"
           rows={6}
           />
          </div>
        </div>
        <div className="w-full p-2" style={{
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
        }}>
          <Button type='primary' htmlType='submit' style={{
            backgroundColor: "#FF5B22"
          }}>Submit</Button>
        </div>
        </div>
      </Form>
    </div>
  </div>
</section>
  )
}

export default FeedbackForm;