"use client";
import React, { useRef, useState } from 'react'
import Icon, {
    DeleteOutlined,
    EditOutlined,
    ReloadOutlined,
    SearchOutlined,
    EyeOutlined,
  } from "@ant-design/icons";
  import dayjs from "dayjs";
  import Link from 'next/link';
  import { Button, Input, message,  Space } from 'antd';
import { useDebounced } from '@/redux/hooks';
import { useDeleteEventMutation, useGetAllEventQuery } from '@/redux/api/eventApi';
import { IEvent } from '@/types';
import {
  ActionType,
  ProTable,
  ProColumns,
  RequestData,
  TableDropdown,
  ProDescriptions,
} from '@ant-design/pro-components';
import { CiCircleMore } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';
import BreadCrumb from '@/components/shared/BreadCrumb';
import ActionBar from '@/components/shared/ActionBar';
import UMTable from '@/components/shared/UMTable';

enum ActionKey {
  DELETE = 'delete',
  UPDATE = 'update',
  READ = 'read'
}

function ManageEvent() {
    const query: Record<string, any> = {};
    const actionRef = useRef<ActionType>();

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [deleteEvent] = useDeleteEventMutation();
  
    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;
  
    const debouncedSearchTerm = useDebounced({
      searchQuery: searchTerm,
      delay: 600,
    });
  
    if (!!debouncedSearchTerm) {
      query["searchTerm"] = debouncedSearchTerm;
    }
  
    const {data, isLoading} = useGetAllEventQuery({...query});
    
  // @ts-ignore
    const events = data?.event?.data;
    // @ts-ignore
    const meta = data?.event?.meta;

    const handleDelete = async (id: string) => {
      message.loading("Deleting.....");
      try {
        await deleteEvent(id);
        message.success("Event Deleted successfully");
    } catch (err: any) {
        message.error(err.message);
    }
    };
  
    const columns: ProColumns[] = [
      {
        title: "Title",
        render: function (data: any) {
          return <>{data.title}</>;
        },
      },
      {
        title: "Category Name",
        render: function (data: any) {
          return <>{data?.Category?.name}</>;
        },
      },
      {
        title: "price",
        dataIndex: "price",
    
      },
      {
        title: "Is Booked",
        render: function (data: any) {
          return (
            <>
            {data.isBooked ? (
              <p>Booked</p>
            ) : (
              <p>Available</p>
            )}
            </>
          );
        },
      },
      
      {
        title: "People",
        dataIndex: "people",
      
      },
      {
        title: "Created at",
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
    const onPaginationChange = (page: number, pageSize: number) => {
      
      setPage(page);
      setSize(pageSize);
    };
    const onTableChange = (pagination: any, filter: any, sorter: any) => {
      const { order, field } = sorter;
  
      setSortBy(field as string);
      setSortOrder(order === "ascend" ? "asc" : "desc");
    };
  
    const resetFilters = () => {
      setSortBy("");
      setSortOrder("");
      setSearchTerm("");
    };
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
        <ActionBar>
                <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#FFA33C" }} />}
                    placeholder="Search ......"
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
                {(!!sortBy || !!sortOrder || !!searchTerm) && (
                    <button
                        onClick={resetFilters}
                        className="bg-orange-600 px-4 py-2 ml-2 text-white rounded font-semibold float-right"
                    >
                        <ReloadOutlined />
                    </button>
                )}
                <Link href="/admin/manage-event/create">
            <Button type="primary" style={{
              backgroundColor: "#54B435",
              margin: "0px 10px"
            }}>Create</Button>
          </Link>
                
            </ActionBar>

            <ProTable
        columns={columns}
        cardBordered={false}
        cardProps={{
          subTitle: 'Event List',
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
       dataSource={events}
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

export default ManageEvent