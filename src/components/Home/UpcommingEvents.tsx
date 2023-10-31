import React from 'react'
import EventCard from '../Events/EventCard';
import SectionTitle from '../shared/SectionTitle';

type IUpcommingEvents = {
    title: string;
    subtitle?: string;
    hiddenEventId?: string;
  };

function UpcommingEvents({title, subtitle, hiddenEventId}: IUpcommingEvents) {
  return (
    <section className="py-14">
    <div className="container">
     <SectionTitle title='UpComing Events'/>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-10 mt-10">
      <EventCard/>
        <EventCard/>
        <EventCard/>
      </div>
    </div>
  </section>
  )
}

export default UpcommingEvents