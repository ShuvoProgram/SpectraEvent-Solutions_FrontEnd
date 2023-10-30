"use client";
import Loading from '@/app/loading';
import Event from '@/components/Events/Event';
import { useGetSingleEventQuery } from '@/redux/api/eventApi';
import { IDProps } from '@/types';
import { useRouter } from 'next/router';
import React from 'react';

function EventDetailsPage({params}: IDProps) {
  const { id } = params;
  const { data, isLoading, isError } = useGetSingleEventQuery(id);
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <p className='text-lg text-destructive text-center'>There is an error</p>;
  } else {
    content = (
      <Event data={data}/>
    );
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default EventDetailsPage;
