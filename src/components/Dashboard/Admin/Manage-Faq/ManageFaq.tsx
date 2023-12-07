"use client";
import React, { useRef, useState } from 'react';
import dayjs from "dayjs";
import Icon, {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useDebounced } from '@/redux/hooks';
import { useDeleteFaqMutation, useGetAllFaqQuery } from '@/redux/api/faqApi';
import Link from 'next/link';
import { Button, Input, Space, message } from 'antd';
import ActionBar from '@/components/shared/ActionBar';
import UMTable from '@/components/shared/UMTable';
import { ActionType, ProColumns, ProTable, TableDropdown } from '@ant-design/pro-components';
import { CiCircleMore } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';

enum ActionKey {
  DELETE = 'delete',
  UPDATE = 'update',
}

function ManageFaq() {
    const query: Record<string, any> = {};
    const actionRef = useRef<ActionType>();

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
    const columns: ProColumns[] = [
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
               <Link href={`/admin/manage-faq/update/${data?.id}`}>
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
    <div>
              <ActionBar>
              <Input
                    addonBefore={<SearchOutlined style={{ fontSize: '18px', color: "#FF5B22" }} />}
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
      <ProTable
        columns={columns}
        cardBordered={false}
        cardProps={{
          subTitle: 'Faq List',
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
       dataSource={faq}
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

export default ManageFaq