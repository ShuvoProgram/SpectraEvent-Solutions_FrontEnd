"use client";
import { useGetAllEventQuery } from '@/redux/api/eventApi';
import { useDebounced } from '@/redux/hooks';
import { IDProps } from '@/types'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Spinner from '../Loading/Spinner';
import { Col, Empty, Pagination, PaginationProps, Row, Skeleton } from 'antd';
import EventCard from '../Events/EventCard';

function SingleCategoryByEvents({params}: IDProps) {
    const {id} = params;
    const query: Record<string, any> = {};

  const router = useRouter();

  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryId, setCategoryId] = useState<any>({});
  const [current, setCurrent] = useState<number>();

  query["page"] = page;
  query["limit"] = size;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["search"] = searchTerm;
  query["categoryId"] = id;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["search"] = debouncedTerm;
  }

  const { data, isLoading, refetch, isError } = useGetAllEventQuery({ ...query });
  // @ts-ignore
  const events = data?.event?.data;
  const meta = data?.meta;

  const onChange: PaginationProps["onChange"] = (page) => {
    setPage(page);
    setCurrent(page);
  };

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };


const resetFilter = () => {
  setSortBy("");
  setSortOrder("");
  setSearchTerm("");
  setCategoryId("");
};

if(isLoading) {
    return <Spinner/>
}

const getCategoryByEvent = events.filter((items: any) => items.CategoryId === id)


  return (
    <div
    className='container'
    >
        <h1
        style={{
            margin: "20px 0",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <span
              style={{
                color: "#FF5B22",
                fontSize: "40px",
                fontFamily: "serif",
                fontWeight: "bold",
              }}
            >
              {events?.Category?.name} Category
            </span>
        </h1>
        {!isError ? (
  // Filter for events with isBooked === false
  getCategoryByEvent
    ?.filter((event: any) => {
      return event.isBooked === false;
    })
    .slice(0, 3)
    .map((event: any) => (
      <div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10 my-10"
        key={event.id}
      >
        {!isLoading ? (
          <EventCard
            title={event?.title || ''}
            CategoryId={event?.CategoryId || ''}
            description={event?.description || ''}
            vanue={event?.Vanue?.title || ''}
            price={event?.price || ''}
            review={event?.Review || ''}
            imageUrl={event?.eventImg || ''}
            href={`/events/${event?.id}` || ''}
            id={event?.id || ''}
          />
        ) : (
          <Skeleton avatar paragraph={{ rows: 4 }} />
        )}
      </div>
    ))
) : (
  <p>Failed to fetch event list.</p>
)}

{/* Check if there is no data to display */}
{!isError && getCategoryByEvent?.length === 0 && !isLoading && (
  <Empty/>
)}
        <Row style={{
            margin: "20px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
  
        }}>
          {events?.length > 0 ? (
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0",
              }}
              span={24}
            >
              <Pagination
                showSizeChanger
                current={current}
                onChange={onChange}
                total={500}
              />
            </Col>
          ) : null}
        </Row>
    </div>
  )
}

export default SingleCategoryByEvents