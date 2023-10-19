import React from 'react'
import CategoryCard from '../Category/CategoryCard';

type EventListProps = {
    title: string;
    subtitle?: string;
    hiddenEventId?: string;
  };

function Category({title, subtitle, hiddenEventId}: EventListProps) {
  return (
    <section className="grow-today">
    <div className="container">
      <div className="sub-title mb-1" id="grow-today">
        <span className="text-gradient-pink">{subtitle}</span>
      </div>
      <div className="text-3xl text-black font-semibold">{title}</div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        <CategoryCard href='/' categoryImg='https://i.ibb.co/b36rWjT/1.png'/>
      </div>
    </div>
  </section>
  )
}

export default Category