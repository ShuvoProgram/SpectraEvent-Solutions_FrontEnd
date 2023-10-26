import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import Spinner from '@/components/shared/Spinner';
import { useGetAllOrganizationQuery, useUpdateOrganizationMutation } from '@/redux/api/organizationApi';
import { IDProps } from '@/types'
import { Col, Row, message } from 'antd';
import React from 'react'

function UpdateOrganization({params}: IDProps) {
    const { id } = params;
    const {data, isLoading} = useGetAllOrganizationQuery(id);
    const [updateOrganization] = useUpdateOrganizationMutation();
    if(isLoading) {
      return <Spinner/>
    }

    // @ts-ignore
// const defaultValues = {
//   name: data?.organization.name || "",
// };
  
    const onSubmit = async (values: any) => {
      message.loading("Updating...");
      try {
          await updateOrganization({ id, body: values });
          message.success("Category updated successfully!");
      } catch (err: any) {
          message.error(err.message);
      }
  };
  return (
    <div>
        <h1 className="py-5 text-lg font-bold">Update Category</h1>
            <div>
            {/* defaultValues={defaultValues} */}
                <Form submitHandler={onSubmit} >
                    <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <h1 className="text-lg font-bold mb-5">Update Category Information</h1>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col
                                className="gutter-row mb-4"
                                span={24}
                            >
                                <FormInput
                                    type="text"
                                    name="name"
                                    size="large"
                                    label="Title"
                                />
                            </Col>
                        </Row>
                    </div>
                    <button className="bg-violet-600 text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Update Category</button>
                </Form>
            </div>
    </div>
  )
}

export default UpdateOrganization