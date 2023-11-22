"use client"
import ActionBar from '@/components/shared/ActionBar';
import BreadCrumb from '@/components/shared/BreadCrumb';
import UMTable from '@/components/shared/UMTable';
import { useGetAllBookingQuery } from '@/redux/api/bookingApi';
import { useDebounced } from '@/redux/hooks';
import { getUserInfo } from '@/services/auth.service';
import { EditOutlined, ReloadOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import dayjs from "dayjs";
import Link from 'next/link';
import React, { useState } from 'react'

function ManageBooking() {
  const { role } = getUserInfo() as any;
    const query: Record<string, any> = {};

    const [size, setSize] = useState<number>(10);
    const [page, setPage] = useState<number>(1);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");

    query["page"] = page;
    query["limit"] = size;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;
    query["search"] = searchTerm;
  
    const debouncedTerm = useDebounced({
      searchQuery: searchTerm,
      delay: 600,
    });
  
    if (!!debouncedTerm) {
      query["search"] = debouncedTerm;
    }
const {data, isLoading} = useGetAllBookingQuery({...query});
// @ts-ignore
const bookings = data?.booking?.data;
// @ts-ignore
  const meta = data?.booking?.meta;


  const columns = [
    {
      title: "Event Name",
      render: function (data: any) {
        return (
         <p>{data?.Event?.title}</p>
        );
      },
    },

    {
      title: "Booking Schedule",
      render: function (data: any) {
        return (
          <p>
            {data?.scheduleDate}&nbsp;
          </p>
        );
      },
    },

    {
      title: "Price",
      render: function (data: any) {
        return (
          <p>{data?.Event?.price}</p>
        );
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
      title: "Customer Email",
      render: function (data: any) {
        return data?.user?.email;
      },
    },
    {
      title: "Created At",
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
          <div
          >
            <Link href={`/${role}/manage-booking/update/${data.id}`}>
              <Button onClick={() => console.log(`🔥`)}>
                <EditOutlined />
              </Button>
            </Link>
          </div>
        );
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
                        label: "Admin",
                        link: "/admin",
                    },
                ]}
            />
             <ActionBar title="Customer Booking List">
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
                        className="bg-violet-600 px-4 py-2 ml-2 text-white rounded font-semibold float-right"
                    >
                        <ReloadOutlined />
                    </button>
                )}
            </ActionBar>
            <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={bookings}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  )
}

export default ManageBooking