"use client";
import React from 'react'
import CategoryCard from '../Category/CategoryCard';
import SectionTitle from '../shared/SectionTitle';
import { useGetAllCategoryQuery } from '@/redux/api/categoryApi';
import Spinner from '../Loading/Spinner';


function Category() {
  const {data, isLoading, isError} = useGetAllCategoryQuery({})
  if(isLoading){
    return <Spinner/>
  }
  if(isError){
    return (
      <div className='text-red-600 text-center text-2xl font-serif'>Data was Failed</div>
    )
  }
  console.log(data?.Category)
  return (
    <section className="py-14">
    <div className="container">
      <SectionTitle title='Event Category'/>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {
          data?.Category?.map((category: any) => (
            <CategoryCard
            key={ category.id}
              href={`/category/${category.id}`}
              categoryImg={category.image}
              name={category.name}
            />
          ))
        }
      </div>
    </div>
  </section>
  )
}

export default Category