"use client";
import React, { useState } from 'react'
import Spinner from '../Loading/Spinner';
import { Col, Row } from 'antd';
import FilterEvent from './FilterEvent';
import { useGetAllEventQuery } from '@/redux/api/eventApi';
import { useGetAllVanueQuery } from '@/redux/api/vanueApi';
import { useDebounced } from '@/redux/hooks';
import EventCard from './EventCard';

function Events() {
  // const {data, isLoading} = useGetAllEventQuery({})
  const query: Record<string, any> = {};
  const { data: VanueData } = useGetAllVanueQuery({})
  const [searchResult, setSearchResult] = useState<string>("");
  const [venueSelect, setVenueSelect] = useState<any>(null);
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchResult,
    delay: 600,
  });
  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  query["Vanue"] = venueSelect;

  //condition implement
  if (maxPrice > 0) {
    query["minPrice"] = minPrice;
  }
  if (minPrice > 0) {
    query["maxPrice"] = maxPrice;
  }

  const onVenueChange = (newValue: string) => {
    setVenueSelect(newValue);
  };

  const { data, isLoading, isError } = useGetAllEventQuery({ ...query })
  const handleReset = () => {
    setVenueSelect(null);
    setSearchResult("")
    setMaxPrice(0);
    setMinPrice(0);
  }
  //@ts-ignore
  const allEvent = data?.event?.data;

  if (isLoading) {
    return <Spinner />;
  }

  //@ts-ignore
  const Venue = VanueData?.vanue?.data;

  return (
    <div className='container my-10'>
      <h1
        style={{
          margin: "20px 0px",
          color: "#FF5B22",
          fontSize: "40px",
          fontFamily: "serif",
          fontWeight: "bold",
          textAlign: "center"
        }}
      >Event</h1>
      <Row justify="space-around">
        <Col sm={12} md={16} lg={4}>
          <FilterEvent
            setSearchResult={setSearchResult}
            //  onVenueChanged={onVenueChange}
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            minPrice={minPrice}
            Venue={Venue}
            handleReset={handleReset}
          />
        </Col>

        <Col sm={12} md={16} lg={18}>
          <Row justify="center">
            {isError ? (
              <div>Error: Failed to fetch event list.</div>
            ) : allEvent?.map((event: any) => (
              <Col key={event._id} sm={12} md={12} lg={8}>
                <div>
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
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Events