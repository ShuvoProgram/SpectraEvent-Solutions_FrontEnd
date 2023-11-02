import React from 'react'
import EventCard from '../Events/EventCard'
import { useGetAllEventQuery } from '@/redux/api/eventApi'
function CategoryTabsData({data}: any) {
    const {data: eventData, isLoading, isError} = useGetAllEventQuery({
        variables: {
            categoryId: data.id
        }
    })
    // if(isLoading) {
    //     return <Spinner/>
    // }
// @ts-ignore
    const events = eventData?.event?.data;
    console.log(events)
  return (
    <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
       {!isError ? (
                // Filter for events where isBooked is false
                events?.filter((event: any) => {
                    return event.isBooked === false;
                })
                    .slice(0, 3)
                    .map((event: any) => (
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10 mt-10" key={event.id}>
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
                    ))
            ) : (
                <p>Failed to fetch event list.</p>
            )}

            {/* Show "No data found" message if there are no events */}
            {events && events.length === 0 && !isLoading && !isError && events.id === "undefined" as String && (
                <p>No data found.</p>
            )}
    </div>
  )
}

export default CategoryTabsData