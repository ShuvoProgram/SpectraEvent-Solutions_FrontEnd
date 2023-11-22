"use client";
import React from 'react'
import EventCard from '../Events/EventCard';
import SectionTitle from '../shared/SectionTitle';
import { useGetAllEventQuery } from '@/redux/api/eventApi';
import { Skeleton } from 'antd';

function UpcommingEvents() {
  const query: Record<string, any> = {};
  const { data, isLoading, isError } = useGetAllEventQuery({ ...query });
  // @ts-ignore
  const events = data?.event?.data;
  return (
    <section className="py-4">
    <div className="container">
     <SectionTitle title='UpComing Events'/>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10 mt-10">
      {!isError ? (
            //filter for event on isBooked
            events?.filter((event: any) => {
              return event.isComingSoon === true;
            })
              .slice(0, 4)
              .map((event: any) => (
                <div key={event.id}>
                  {!isLoading ? (
                    <EventCard
                      title={event?.title || ""}
                      CategoryId={event?.CategoryId|| ""}
                      description={event?.description || ""}
                      vanue={event?.vanueId || ""}
                      price={event?.price || ""}
                      review={event?.Review || ""}
                      imageUrl={event?.eventImg || ""}
                      href={`/events/${event?.id}` || ""}
                      id={event?.id || ""}
                      isComing={event?.isComingSoon}
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
    </div>
  </section>
  )
}

export default UpcommingEvents