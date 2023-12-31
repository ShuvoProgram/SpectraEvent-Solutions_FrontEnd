"use client";
import ActionBar from '@/components/shared/ActionBar';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { useDeleteCategoryMutation, useGetAllCategoryQuery } from '@/redux/api/categoryApi';
import { useDebounced } from '@/redux/hooks';
import Icon, {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import {
  ActionType,
  ProTable,
  ProColumns,
  RequestData,
  TableDropdown,
  ProDescriptions,
} from '@ant-design/pro-components';
import { CiCircleMore } from 'react-icons/ci';
import { Avatar, Button, Input, Space, message } from 'antd';
import dayjs from "dayjs";
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { FiUsers } from 'react-icons/fi';

enum ActionKey {
  DELETE = 'delete',
  UPDATE = 'update'
}

function ManageCategory() {
  const query: Record<string, any> = {};
  const actionRef = useRef<ActionType>();

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
const [deleteCategory] = useDeleteCategoryMutation();

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


const { data, isLoading } = useGetAllCategoryQuery({ ...query });

const categories = data?.Category;

// @ts-ignore
  const meta = data?.Category?.meta;
 const handleDelete = async (id: string) => {
  message.loading("Deleting.....");
  try {
    await deleteCategory(id);
    message.success("Category Deleted successfully");
} catch (err: any) {
    message.error(err.message);
}
};

const columns: ProColumns[] = [
  {
      title: "Category Name",
      dataIndex: "name",
  },
  {
      title: "Category Image",
      render: function (data: any) {
        // return <img src={data?.profilePicture} alt="profile" width="50px" height="50px" />
        return <Avatar shape="square" size={50} src={data?.image} />;
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
         <ActionBar>
                <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#FFA33C" }} />}
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
                <Link href="/admin/manage-category/create">
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
          subTitle: 'Event Category List',
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
       dataSource={categories}
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

export default ManageCategory