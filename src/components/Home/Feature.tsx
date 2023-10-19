import React from 'react'
import EventCard from '../Events/EventCard';

type EventListProps = {
    title: string;
    subtitle?: string;
    hiddenEventId?: string;
  };

function FeatureEvent({title, subtitle, hiddenEventId}: EventListProps) {
  return (
    <section className="grow-today">
    <div className="container">
      <div className="sub-title mb-1" id="grow-today">
        <span className="text-gradient-pink">{subtitle}</span>
      </div>
      <div className="text-3xl text-black font-semibold">{title}</div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        <EventCard/>
        <EventCard/>
        <EventCard/>
        {/* {!isError ? (
          data
            ?.filter((event) => event._id !== hiddenEventId)
            .slice(0, 3)
            .map((event: IEventMain) => (
              <div className="col-12 col-md-6 col-lg-4" key={event._id}>
                {!isLoading ? (
                  <EventCard
                    title={event.title}
                    subtitle={event.category.name}
                    description={event.venueName}
                    price={event.tickets[0].price}
                    imageUrl={`${process.env.NEXT_PUBLIC_API_URL}/${event.image.url}`}
                    href={`/detail/${event._id}`}
                  />
                ) : (
                  <Skeleton width="100%" height={300} borderRadius={20} />
                )}
              </div>
            ))
        ) : (
          <p>Failed to fetch event list.</p>
        )} */}
      </div>
    </div>
  </section>
  )
}

export default FeatureEvent;