"use client";
import Spinner from '@/components/Loading/Spinner';
import ActionBar from '@/components/shared/ActionBar';
import BreadCrumb from '@/components/shared/BreadCrumb';
import UMTable from '@/components/shared/UMTable';
import { useDeleteFeedbackMutation, useGetAllFeedbackQuery, useUpdateFeedbackMutation } from '@/redux/api/feedbackApi';
import { isConfirm } from '@/types';
import Icon, { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { ActionType, ProColumns, ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Space, message } from 'antd';
import dayjs from "dayjs";
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { CiCircleMore } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';

enum ActionKey {
  DELETE = 'delete',
  UPDATE = 'update',
}

function ManageFeedback() {
    const [id, setId] = useState<string>();
    const actionRef = useRef<ActionType>();
    const [deleteFeedback] = useDeleteFeedbackMutation();
    
    const {data, isLoading} = useGetAllFeedbackQuery({});
  
    if(isLoading) {
        return <Spinner/>
    };

    const handleDelete = async (id: string) => {
      message.loading("Deleting.....");
      try {
        await deleteFeedback(id);
        message.success("Feedback Deleted successfully");
    } catch (err: any) {
        message.error(err.message);
    }
    };

    const columns: ProColumns[] = [
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
          align: 'center',
          key: 'option',
          fixed: 'right',
          render: (data: any) => [
            <TableDropdown
            key="actionGroup"
            // onSelect={() => handleDelete(data?.id)}
            menus={[
              {
                key: ActionKey.DELETE,
                name: (
                  <Space>
                  <Button
                    onClick={() => handleDelete(data?.id)}
                   
                  >
                    <DeleteOutlined />
                    Delete
                  </Button>
                </Space>
                )
              },
              {
                key: ActionKey.UPDATE,
                name: (
                  <Space>
                 <Link href={`/admin/manage-category/update/${data.id}`}>
                     <EditOutlined />
                     Update
                  </Link>
                </Space>
                )
              }
            ]}
            >
               <Icon component={CiCircleMore} className="text-primary text-xl" />
            </TableDropdown>
          ],
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
            <ProTable
        columns={columns}
        cardBordered={false}
        cardProps={{
          subTitle: 'User Feedback',
          tooltip: {
            className: 'opacity-60',
            title: 'Mocked data',
          },
          title: <FiUsers className="opacity-60" />,
        }}
        bordered={true}
        showSorterTooltip={false}
        scroll={{ x: true }}
        tableLayout={'fixed'}
        rowSelection={false}
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
        }}
        actionRef={actionRef}
       dataSource={data}
        dateFormatter="string"
        search={false}
        rowKey="id"
        options={{
          search: false,
        }}
      />
    </div>
  )
}

export default ManageFeedback