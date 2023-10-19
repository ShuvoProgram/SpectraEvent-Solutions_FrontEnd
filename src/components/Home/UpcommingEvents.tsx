import React from 'react'
import EventCard from '../Events/EventCard';

type IUpcommingEvents = {
    title: string;
    subtitle?: string;
    hiddenEventId?: string;
  };

function UpcommingEvents({title, subtitle, hiddenEventId}: IUpcommingEvents) {
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
      </div>
    </div>
  </section>
  )
}

export default UpcommingEvents