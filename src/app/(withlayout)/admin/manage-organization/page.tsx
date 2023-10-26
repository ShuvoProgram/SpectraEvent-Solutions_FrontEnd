'use client'
import ActionBar from '@/components/shared/ActionBar';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { useDeleteOrganizationMutation, useGetAllOrganizationQuery } from '@/redux/api/organizationApi';
import { useDebounced } from '@/redux/hooks';
import { Button, Input, message } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import React, { useState } from 'react'
import Link from 'next/link';
import dayjs from "dayjs";
import UMTable from '@/components/shared/UMTable';

function OrganizationPage() {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
  const [deleteOrganization] = useDeleteOrganizationMutation();

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

  const { data, isLoading } = useGetAllOrganizationQuery({ ...query });
  const categories = data?.organization?.organization
    const meta = data?.organization?.meta;
   const handleDelete = async (id: string) => {
    message.loading("Deleting.....");
    try {
      await deleteOrganization(id);
      message.success("Category Deleted successfully");
  } catch (err: any) {
      message.error(err.message);
  }
  };

  const columns = [
    {
        title: "Organization Name",
        dataIndex: "name",
    },
    {
        title: "Organization Image",
        dataIndex: "image",
    },
    {
        title: "AvailableEvent",
        dataIndex: "availableEvent",
    },
    {
        title: "Admin Name",
        dataIndex: "admin",
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
                <div className="flex">
                    <Link href={`/admin/category/update/${data.id}`}>
                        <button className="bg-violet-600 text-white font-bold py-1 px-2 rounded mr-2">
                            <EditOutlined />
                        </button>
                    </Link>
                    <button onClick={() => handleDelete(data?.id)} className="bg-red-500 text-white font-bold py-1 px-2 rounded mr-2">
                        <DeleteOutlined />
                    </button>
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
    <div>
        <BreadCrumb
         items={[
            {
              label: "Admin",
              link: "/admin",
            },
          ]}
        />
         <ActionBar title="Tour Category List">
                <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#4338ca" }} />}
                    placeholder="Search Category ......"
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
                <Link href="/admin/manage-organization/create">
                <Button type="primary" style={{
              backgroundColor: "#54B435",
              margin: "0px 10px"
            }}>Create</Button>
                </Link>
            </ActionBar>
            <UMTable
                loading={isLoading}
                columns={columns}
                dataSource={categories}
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

export default OrganizationPage;