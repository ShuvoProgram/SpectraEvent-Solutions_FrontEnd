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
  const {data: VanueData} = useGetAllVanueQuery({})
  const query: Record<string, any> = {};
  const [searchResult, setSearchResult] = useState<string>("");
const [venueSelect, setVenueSelect] = useState<any>(null);
const [minPrice, setMinPrice] = useState('')
const [maxPrice, setMaxPrice] = useState('')

const debouncedSearchTerm = useDebounced({
  searchQuery: searchResult,
  delay: 600,
});
if (!!debouncedSearchTerm) {
  query["searchTerm"] = debouncedSearchTerm;
}
query["Vanue"] = venueSelect;
query["minPrice"] = minPrice;
query["maxPrice"] = maxPrice;

const onVenueChange = (newValue: number) => {
  setVenueSelect(newValue);
};

  const {data, isLoading, isError} = useGetAllEventQuery({...query})
  const handleReset = () => {
    setVenueSelect(null);
    setSearchResult("")
    setMaxPrice('');
    setMinPrice('');
  }
  //@ts-ignore
  const allEvent = data?.event?.data;

  if(isLoading) {
    return <Spinner/>;
  }

  //@ts-ignore
  const Venue = VanueData?.vanue?.data;
console.log(searchResult);
  return (
    <div>
      <div style={{ margin: "0 2rem" }}>
        <Row justify="space-around" style={{ padding: "5rem 0" }}>
          <Col sm={12} md={16} lg={4}>
           <FilterEvent setSearchResult={setSearchResult} onVenueChanged={onVenueChange} Venue={Venue}/>
          </Col>

          <Col sm={12} md={16} lg={18}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
              Event
            </h1>
            <Row justify="center">
              {allEvent?.map((event: any) => (
                <Col key={event._id} sm={12} md={12} lg={8}>
                  <div>
                    <EventCard
                     title={event?.title || ""}
                     category={event?.Category?.name || ""}
                     description={event?.description || ""}
                     vanue={event?.Vanue?.title || ""}
                     price={event?.price || ""}
                     review={event?.Review || ""}
                     imageUrl={event?.eventImg || ""}
                     href={`/events/${event?.id}` || ""}
                     id={event?.id || ""}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Events