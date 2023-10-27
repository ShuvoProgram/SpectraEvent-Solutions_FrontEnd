"use client";
import React, { useState } from 'react'
import {
    DeleteOutlined,
    EditOutlined,
    ReloadOutlined,
    SearchOutlined,
    EyeOutlined,
  } from "@ant-design/icons";
  import dayjs from "dayjs";
  import Link from 'next/link';
  import { Button, Input } from 'antd';
import { useDebounced } from '@/redux/hooks';
import { useGetAllEventQuery } from '@/redux/api/eventApi';
import { IEvent, IORGANIZATION } from '@/types';
import BreadCrumb from '@/components/shared/BreadCrumb';
import ActionBar from '@/components/shared/ActionBar';
import UMTable from '@/components/shared/UMTable';

function ManageEvent() {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
  
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
  
    const events = data?.event?.event;
    const meta = data?.event?.meta;
    console.log(events);
  
    const columns = [
      {
        title: "Id",
        dataIndex: "eventId",
        sorter: true,
      },
      {
        title: "Title",
        render: function (data: IEvent) {
          return <>{data.title}</>;
        },
      },
      {
        title: "organizationId",
        dataIndex: "organizationId",
      },
      {
        title: "Organization",
        dataIndex: "Organization",
        render: function (data: IORGANIZATION) {
          return <>{data?.name}</>;
        },
      },
      {
        title: "price",
        dataIndex: "price",
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
        title: "maxCapacity",
        dataIndex: "maxCapacity",
      },
      {
        title: "Action",
        dataIndex: "id",
        render: function (data: any) {
          return (
            <>
              <Link href={`/admin/manage-event/details/${data.id}`}>
                <Button onClick={() => console.log(data)} type="primary">
                  <EyeOutlined />
                </Button>
              </Link>
              <Link href={`/admin/manage-event/edit/${data.id}`}>
                <Button
                  style={{
                    margin: "0px 5px",
                  }}
                  onClick={() => console.log(data)}
                  type="primary"
                >
                  <EditOutlined />
                </Button>
              </Link>
              <Button onClick={() => console.log(data)} type="primary" danger>
                <DeleteOutlined />
              </Button>
            </>
          );
        },
      },
    ];
    const onPaginationChange = (page: number, pageSize: number) => {
      console.log("Page:", page, "PageSize:", pageSize);
      setPage(page);
      setSize(pageSize);
    };
    const onTableChange = (pagination: any, filter: any, sorter: any) => {
      const { order, field } = sorter;
      // console.log(order, field);
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
        <ActionBar title="Event List">
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

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={events}
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

export default ManageEvent