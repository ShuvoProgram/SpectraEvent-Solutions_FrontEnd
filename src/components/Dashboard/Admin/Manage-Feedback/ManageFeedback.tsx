"use client";
import Spinner from '@/components/Loading/Spinner';
import ActionBar from '@/components/shared/ActionBar';
import BreadCrumb from '@/components/shared/BreadCrumb';
import UMTable from '@/components/shared/UMTable';
import { useGetAllFeedbackQuery, useUpdateFeedbackMutation } from '@/redux/api/feedbackApi';
import { isConfirm } from '@/types';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import dayjs from "dayjs";
import Link from 'next/link';
import React, { useState } from 'react'

function ManageFeedback() {
    const [id, setId] = useState<string>()
    const {data, isLoading} = useGetAllFeedbackQuery({});
  
    if(isLoading) {
        return <Spinner/>
    };

    const columns = [
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "Email",
          dataIndex: "email",
        },
        {
          title: "Message",
          dataIndex: "message",
        },
        {
          title: "Is Published",
          render: function (data: any) {
            return data.isPublished === true ? (
                <strong style={{ color: "green" }}>Published</strong>
            ) : (
                <strong style={{ color: "orange" }}>UnPublished</strong>
            )
          }
        },
        {
          title: "CreatedAt",
          dataIndex: "createdAt",
          render: function (data: any) {
            return data && dayjs(data).format("MMM D, YYYY hh:mm A");
          },
          sorter: true,
        },
        {
          title: "Action",
          render: function (data: any) {
            return (
              <>
                 <Link href={`/admin/manage-feedback/update/${data.id}`}>
                <Button onClick={() => console.log(data)} style={{margin: "0px 10px"}}>
                <EditOutlined />
                </Button>
              </Link>
                <Button
                //   onClick={() => handleDelete(data?.id)}
                  type="primary"
                  danger
                >
                  <DeleteOutlined />
                </Button>
              </>
            );
          },
        },
      ];


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
         <ActionBar title="User Feedback">
            </ActionBar>

            <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={data}
        // pageSize={size}
        // totalPages={meta?.total}
        showSizeChanger={true}
        // onPaginationChange={onPaginationChange}
        // onTableChange={onTableChange}
        // showPagination={true}
      />
    </div>
  )
}

export default ManageFeedback