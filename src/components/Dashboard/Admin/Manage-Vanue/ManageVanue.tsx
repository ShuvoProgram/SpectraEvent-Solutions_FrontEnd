"use client";
import { useDeleteVanueMutation, useGetAllVanueQuery } from '@/redux/api/vanueApi';
import { useDebounced } from '@/redux/hooks';
import { Button, Input, Space, message } from 'antd';
import React, { useRef, useState } from 'react'
import dayjs from "dayjs";
import Icon, {
    DeleteOutlined,
    EditOutlined,
    ReloadOutlined,
    SearchOutlined,
  } from "@ant-design/icons";
import Link from 'next/link';
import BreadCrumb from '@/components/shared/BreadCrumb';
import ActionBar from '@/components/shared/ActionBar';
import UMTable from '@/components/shared/UMTable';
import { ActionType, ProColumns, ProTable, TableDropdown } from '@ant-design/pro-components';
import { CiCircleMore } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';

enum ActionKey {
  DELETE = 'delete',
  UPDATE = 'update',
}


function ManageVanue() {
    const query: Record<string, any> = {};
    const actionRef = useRef<ActionType>();

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [deleteVanue] = useDeleteVanueMutation();
  
    query["limit"] = size;
    query["page"] = page;
    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;
    // query["searchTerm"] = searchTerm;
  
    const debouncedTerm = useDebounced({
      searchQuery: searchTerm,
      delay: 600,
    });
  
    if (!!debouncedTerm) {
      query["searchTerm"] = debouncedTerm;
    }
  
    const {data, isLoading} = useGetAllVanueQuery({...query});
  // @ts-ignore
    const Vanue = data?.vanue?.data;
    // @ts-ignore
    const meta = data?.meta?.meta;

    const handleDelete = async (id: string) => {
      message.loading("Deleting......")
      try {
        const res = await deleteVanue(id);
        if (res) {
          message.success('Successfully Deleted Vanue');
          setPage(1);
        }
      } catch (err: any) {
        message.error(err.message)
      }
    }

    const columns: ProColumns[] = [
      {
        title: "Vanue Title",
        dataIndex: "title",
      },
      {
        title: "CreatedAt",
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
              label: "admin",
              link: "/admin",
            },
          ]}
        />
            <ActionBar title="Vanue List">
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
                <Link href="/admin/manage-vanue/create">
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
          subTitle: 'category List',
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
       dataSource={Vanue}
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

export default ManageVanue