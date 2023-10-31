"use client";
import React from 'react'
import EventCard from '../Events/EventCard';
import { useGetAllEventQuery } from '@/redux/api/eventApi';
import { Skeleton } from 'antd';
import SectionTitle from '../shared/SectionTitle';

type EventListProps = {
    title: string;
    subtitle?: string;
    hiddenEventId?: string;
  };

function FeatureEvent({title, subtitle, hiddenEventId}: EventListProps) {
  const query: Record<string, any> = {};
  const { data, isLoading, isError } = useGetAllEventQuery({ ...query });
  const events = data?.event?.data;
 
  return (
    <section className="py-14">
    <div className="container">
     <SectionTitle title='Our Events'/>
      {!isError ? (
          //filter for event on isBooked
        events?.filter((event: any) => {
          return event.isBooked === false;
        })
            .slice(0, 3)
            .map((event:any) => (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10 mt-10" key={event.id}>
                {!isLoading ? (
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
                ) : (
                  <Skeleton avatar paragraph={{ rows: 4 }} />
                )}
              </div>
            ))
        ) : (
          <p>Failed to fetch event list.</p>
        )}
    </div>
  </section>
  )
}

export default FeatureEvent;