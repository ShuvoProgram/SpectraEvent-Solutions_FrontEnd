"use client";
import React, { useState } from 'react';
import dayjs from "dayjs";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useDebounced } from '@/redux/hooks';
import { useDeleteFaqMutation, useGetAllFaqQuery } from '@/redux/api/faqApi';
import Link from 'next/link';
import { Button, Input, message } from 'antd';
import ActionBar from '@/components/shared/ActionBar';
import UMTable from '@/components/shared/UMTable';

function ManageFaq() {
    const query: Record<string, any> = {};

    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [sortBy, setSortBy] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [deleteFaq] = useDeleteFaqMutation();
  
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
  
    const {data, isLoading} = useGetAllFaqQuery({...query});
  // @ts-ignore
    const faq = data?.faq?.data;
    // @ts-ignore
    const meta = data?.meta?.meta;

    const handleDelete = async (id: string) => {
      message.loading("Deleting......")
      try {
        const res = await deleteFaq(id);
        if (res) {
          message.success('Successfully Deleted FAQ');
          setPage(1);
        }
      } catch (err: any) {
        message.error(err.message)
      }
    }
    const columns = [
      {
        title: "Question",
        dataIndex: "question",
      },
      {
        title: "Answer",
        dataIndex: "answer",
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
              <Link href={`/admin/manage-faq/update/${data?.id}`}>
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
    <div>
              <ActionBar>
              <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#4338ca" }} />}
                    placeholder="Search ......"
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
         <div>
          <Link href="/admin/manage-faq/create-faq">
            <Button type="primary" style={{
              backgroundColor: "#54B435",
              margin: "0px 10px"
            }}>Create</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              type="primary"
              style={{ margin: "0px 5px" }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>
      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={faq}
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

export default ManageFaq