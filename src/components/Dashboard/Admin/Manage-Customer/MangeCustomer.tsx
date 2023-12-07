"use client";
import { useDeleteCustomerMutation, useGetAllCustomerQuery } from '@/redux/api/userApi';
import { useDebounced } from '@/redux/hooks';
import { Button, Input, message, Space } from 'antd';
import Link from 'next/link';
import Icon, {
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
    ReloadOutlined,
    EyeOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import React, { useRef, useState } from 'react'
import { FiUsers } from 'react-icons/fi';
import ActionBar from '@/components/shared/ActionBar';
import { CiCircleMore } from 'react-icons/ci';
import BreadCrumb from '@/components/shared/BreadCrumb';
import { getUserInfo } from '@/services/auth.service';
import { ActionType, ProColumns, ProTable,  TableDropdown, } from '@ant-design/pro-components';

enum ActionKey {
    DELETE = 'delete',
    UPDATE = 'update',
    READ = 'read'
  }

function MangeCustomer() {
    const query: Record<string, any> = {};
    const actionRef = useRef<ActionType>();
    
    const { role } = getUserInfo() as any;
    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [deleteCustomer] = useDeleteCustomerMutation();

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

    const { data, isLoading } = useGetAllCustomerQuery({ ...query });
    const users = data?.users;
    const meta = data?.meta;

    const deleteHandler = async (id: string) => {
        message.loading("Deleting.....");
        try {
            await deleteCustomer(id);
            message.success("User Deleted successfully");
        } catch (err: any) {
            message.error(err.message);
        }
    };

    const columns: ProColumns[] = [
        {
            title: "Name",
            dataIndex: "firstName",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Contact No",
            dataIndex: "contactNo",
        },
        {
            title: "Role",
            dataIndex: "role",
        },
        {
            title: "Address",
            dataIndex: "address",
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
                        onClick={() => deleteHandler(data?.id)}
                       
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
                     <Link href={`/admin/manage-customer/update/${data.id}`}>
                         <EditOutlined />
                         Update
                      </Link>
                    </Space>
                    )
                  },
                  {
                    key: ActionKey.READ,
                    name: (
                      <Space>
                     <Link href={`/admin/manage-customer/customer-details/${data.id}`}>
                         <EyeOutlined />
                         View
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
                    link: `/${role}`,
                },
                {
                    label: "Manage-Customer",
                    link: `/${role}/manage-customer`,
                },
            ]}
            />
         <ActionBar>
                <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#FFA33C" }} />}
                    placeholder="Search User ......"
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
          subTitle: 'Customer List',
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
       dataSource={users}
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

export default MangeCustomer