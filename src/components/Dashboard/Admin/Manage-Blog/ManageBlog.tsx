"use client";
import { useDeleteBlogMutation, useGetAllBlogQuery } from '@/redux/api/blogApi';
import { useDebounced } from '@/redux/hooks';
import { Button, Input, Space, message } from 'antd';
import Link from 'next/link';
import dayjs from "dayjs";
import React, { useRef, useState } from 'react';
import Icon, {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
    ReloadOutlined,
    EyeOutlined,
} from "@ant-design/icons";
import { CiCircleMore } from 'react-icons/ci';
import ActionBar from '@/components/shared/ActionBar';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { useAdminQuery } from '@/redux/api/adminApi';
import { ActionType, ProColumns, ProTable, TableDropdown } from '@ant-design/pro-components';
import { FiUsers } from 'react-icons/fi';

function getFullName(adminData: any) {
    const conditionFirstName = adminData?.firstName || '';
    const conditionLastName = adminData?.lastName || '';
    const fullName = `${conditionFirstName} ${conditionLastName}`.trim();
    return fullName !== '' ? fullName : 'admin';
}

enum ActionKey {
    DELETE = 'delete',
    UPDATE = 'update'
  }

function ManageBlog() {
    const query: Record<string, any> = {};
    const actionRef = useRef<ActionType>();
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
    // @ts-ignore
    const meta = data?.blog?.meta;

    const handleDelete = async (id: string) => {
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

    const columns: ProColumns[] = [
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
            render: function (data: any) {
                const fullName = getFullName(adminData);
                return <>{fullName}</>;
            },
        },
        {
            title: "Author Email",
            render: function (data: any) {
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
            <ProTable
        columns={columns}
        cardBordered={false}
        cardProps={{
          subTitle: 'Blog List',
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
       dataSource={blog}
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

export default ManageBlog