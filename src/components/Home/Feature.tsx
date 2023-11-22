"use client";
import React from 'react'
import EventCard from '../Events/EventCard';
import { useGetAllEventQuery } from '@/redux/api/eventApi';
import { Skeleton } from 'antd';
import SectionTitle from '../shared/SectionTitle';
import Link from 'next/link';

function FeatureEvent() {
  const query: Record<string, any> = {};
  const { data, isLoading, isError } = useGetAllEventQuery({ ...query });
  // @ts-ignore
  const events = data?.event?.data;

  return (
    <section className="py-4">
      <div className="container">
        <SectionTitle title='Our Events' />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10 mt-10">
        {!isError ? (
            //filter for event on isBooked
            events?.filter((event: any) => {
              return event.isComingSoon === false && event.isBooked === false;
            })
              .slice(0, 4)
              .map((event: any) => (
                <div key={event.id}>
                  {!isLoading ? (
                    <EventCard
                      title={event?.title || ""}
                      CategoryId={event?.CategoryId || ""}
                      description={event?.description || ""}
                      vanue={event?.vanueId || ""}
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
        <div className='w-full flex items-center justify-center mt-8'>
     <Link href={`/events`} className='p-4 bg-[#FF5B22] rounded-md text-white hover:text-white font-serif'>Get All Events</Link>
     </div>
      </div>
    </section>
  )
}

export default FeatureEvent;