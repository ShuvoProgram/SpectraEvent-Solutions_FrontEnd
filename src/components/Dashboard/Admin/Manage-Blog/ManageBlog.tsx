"use client";
import { useDeleteBlogMutation, useGetAllBlogQuery } from '@/redux/api/blogApi';
import { useDebounced } from '@/redux/hooks';
import { Button, Input, message } from 'antd';
import Link from 'next/link';
import dayjs from "dayjs";
import React, { useState } from 'react';
import {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
    ReloadOutlined,
    EyeOutlined,
} from "@ant-design/icons";
import UMTable from '@/components/shared/UMTable';
import ActionBar from '@/components/shared/ActionBar';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { useAdminQuery } from '@/redux/api/adminApi';

function ManageBlog() {
    const query: Record<string, any> = {};
    const [adminId, setAdminId] = useState<string>("")

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [deleteBlog] = useDeleteBlogMutation();

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
    const { data, isLoading } = useGetAllBlogQuery({...query});
    const {data: adminData} = useAdminQuery(adminId)
    // @ts-ignore
    const blog = data?.blog?.data;
    // console.log(blog)
    // @ts-ignore
    const meta = data?.blog?.meta;

    const onDelete = async (id: string) => {
        message.loading("Deleting.....");
        try {
            
            const res = await deleteBlog(id).unwrap();
            if (res?.id) {
                message.success('Successfully Deleted Blog')
            }
        } catch (error: any) {
            console.error(error.message);
        }
    }

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "Content Type",
            dataIndex: "contentType",
        },
        {
            title: "Author",
            // dataIndex: "user",
            render: function (data: Record<string, string>) {
                const fullName = `${adminData?.firstName} ${adminData?.lastName}`;
                return <>{fullName}</>;
            },
        },
        {
            title: "Author Email",
            render: function (data: Record<string, string>) {
                setAdminId(data?.adminId)
                return <>{adminData?.email}</>;
            },
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
            title: "Actions",
            render: function (data: any) {
                return (
                    <>
                        <Link href={`/blog/details/${data.id}`}>
                        <Button onClick={() => console.log(data)}>
                  <EyeOutlined />
                </Button>
                        </Link>
                        <Link href={`/admin/manage-blog/update/${data.id}`}>
                        <Button onClick={() => console.log(data)}>
                <EditOutlined />
              </Button>
                        </Link>
                        <Button 
                        onClick={() => onDelete(data?.id)}
                         type="primary" danger>
                <DeleteOutlined />
              </Button>
                    </>
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
        <ActionBar title="Blog List">
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
                <Link href="/admin/manage-blog/create">
            <Button type="primary" style={{
              backgroundColor: "#54B435",
              margin: "0px 10px"
            }}>Create</Button>
          </Link>
                
            </ActionBar>
        <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={blog}
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

export default ManageBlog