"use client";
import { useDeleteVanueMutation, useGetAllVanueQuery } from '@/redux/api/vanueApi';
import { useDebounced } from '@/redux/hooks';
import { Button, Input, message } from 'antd';
import React, { useState } from 'react'
import dayjs from "dayjs";
import {
    DeleteOutlined,
    EditOutlined,
    ReloadOutlined,
    SearchOutlined,
  } from "@ant-design/icons";
import Link from 'next/link';
import BreadCrumb from '@/components/shared/BreadCrumb';
import ActionBar from '@/components/shared/ActionBar';
import UMTable from '@/components/shared/UMTable';

function ManageVanue() {
    const query: Record<string, any> = {};

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
    const columns = [
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
        render: function (data: any) {
          return (
            <>
              <Link href={`/admin/manage-vanue/update/${data?.id}`}>
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

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={Vanue}
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

export default ManageVanue