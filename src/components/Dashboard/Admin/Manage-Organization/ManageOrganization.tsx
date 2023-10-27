"use client";
import ActionBar from '@/components/shared/ActionBar';
import BreadCrumb from '@/components/shared/BreadCrumb';
import UMTable from '@/components/shared/UMTable';
import { useDeleteOrganizationMutation, useGetAllOrganizationQuery } from '@/redux/api/organizationApi';
import { useDebounced } from '@/redux/hooks';
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from 'antd';
import dayjs from "dayjs";
import Link from 'next/link';
import React, { useState } from 'react'

function ManageOrganization() {
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

const categories = data?.organization;
// console.log(categories)
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
      title: "Admin Name",
      dataIndex: "admin",
      render: function (data: any){

      }
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
                  <Link href={`/admin/manage-organization/update/${data.id}`}>
                  <Button
                  style={{
                    margin: "0px 5px",
                    backgroundColor: "#00A9FF"
                  }}
                  onClick={() => console.log(data)}
                  type="primary"

                >
                  <EditOutlined />
                </Button>
                  </Link>
                  <Button
                onClick={() => handleDelete(data?.id)}
                type="primary"
                danger
              >
                <DeleteOutlined />
              </Button>
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
         <ActionBar title="Event Organization List">
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

export default ManageOrganization