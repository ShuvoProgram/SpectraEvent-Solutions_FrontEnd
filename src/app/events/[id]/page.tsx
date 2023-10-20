import Loading from '@/app/loading';
import { useGetAllEventQuery } from '@/redux/api/eventApi';
import { useParams } from 'next/navigation';
import React from 'react'

function EventDetailsPage() {
    const id:any = useParams();
    const {data, isLoading, isError} = useGetAllEventQuery(id?.id);
    const event = data?.event;
    let content = null;
    if (isLoading) content = <Loading/>;
    if (!isLoading && isError) content = <p className='text-lg text-destructive text-center'>There is an error</p>;
    if (!isLoading && !isError && event) {content = <ProductDetails key={event._id} event={event}/>}
  return (
    <div>
        {content}
    </div>
  )
}

export default EventDetailsPage;