"use client";
import Spinner from '@/components/Loading/Spinner';
import {
  ActionType,
  ProTable,
  ProColumns,
  RequestData,
  TableDropdown,
  ProDescriptions,
} from '@ant-design/pro-components';
import ActionBar from '@/components/shared/ActionBar';
import BreadCrumb from '@/components/shared/BreadCrumb';
import UMTable from '@/components/shared/UMTable';
import { useCancelBookingMutation, useGetAllBookingForUserQuery} from '@/redux/api/bookingApi';
import { useDebounced } from '@/redux/hooks';
import { FiUsers } from 'react-icons/fi';
import dayjs from "dayjs";
import { DeleteOutlined, ReloadOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, message } from 'antd';
import React, { useRef, useState } from 'react'
import Link from 'next/link';
import { IBooking } from '@/types';
import { handleErrorResponse } from '@/utils/handleErrorResponse';

function MyBooking() {
    const query: Record<string, any> = {};
    const actionRef = useRef<ActionType>();

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [cancelBooking] = useCancelBookingMutation();

    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;
    const debouncedTerm = useDebounced({
      searchQuery: searchTerm,
      delay: 600,
    });

    if (!!debouncedTerm) {
        query["searchTerm"] = debouncedTerm;
      }

      const {data, isLoading} = useGetAllBookingForUserQuery({...query});
      // if(isLoading) {
      //   return <Spinner/>;
      // }

      // @ts-ignore
      const bookingData = data?.booking?.data;
      // @ts-ignore
      const meta = data?.booking?.meta;

      const handleCancelBooking = async (id: string) => {
        message.loading("Canceling......")
        try {
     
          const res = await cancelBooking(id);
          if (res) {
            message.success('Successfully Cancel Booking');
            setPage(1);
          }
        } catch (err: any) {
          message.error(err.message)
        }
      }
     

      const columns: ProColumns[] = [
        {
          title: "Event Name",
          dataIndex: "title",
          sorter: false,
          align: 'center',
          ellipsis: true,
          render: function (data: any) {
            return <>{data?.Event?.title}</>;
          },
        },
        {
          title: "Event Price",
          responsive: ['lg'],
          render: function (data: any) {
            return <>{data?.Event?.price}</>;
          },
         
        },
        {
          title: "Booking Status",
          dataIndex: "status",
          render: function (data: any) {
            return data === "pending" ? (
              <strong style={{ color: "orange" }}>Pending</strong>
            ) : data === "confirmed" ? (
              <strong style={{ color: "green" }}>Confirm</strong>
            ) : (
              <strong
                style={{
                  color: "red",
                }}
              >
               Cancel
              </strong>
            );
          },
        },
        {
          title: "Booking Schedule Date",
          dataIndex: 'scheduleDate'
        },
        {
          title: "Invoice Pdf",
          render: function (data: any) {
            return data.status === "confirmed" ? (
              <Link href={`/user/my-booking/booking-invoice/${data?.id}`} style={{ color: "green" }}>Download Invoice</Link>
            ) : (
              <strong>
                Not Available
              </strong>
            )
          }
        },
        {
          title: "CreatedAt",
          dataIndex: "createdAt",
          responsive: ['lg'],
          render: function (data: any) {
            return data && dayjs(data).format("MMM D, YYYY");
          },
          sorter: true,
        },
        {
          title: "Cancel Booking",
          render: function (data: any) {
            return data.status === "confirmed" ? (
              <Button
              type="primary"
              ghost
            >
              <DeleteOutlined />
            </Button>
            ) : (
              <Button
              onClick={() => handleCancelBooking(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
            )
          },
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
    <div className='user_Dashboard'
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
              label: "admin",
              link: "/admin",
            },
          ]}
        />
          <ActionBar title="My Booking List">
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
            </ActionBar>
            <ProTable
        columns={columns}
        cardBordered={false}
        cardProps={{
          subTitle: 'Users',
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
       dataSource={bookingData}
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

export default MyBooking;