"use client"
import React, { useState, useEffect } from 'react';
import CategoryCard from '../Category/CategoryCard';
import SectionTitle from '../shared/SectionTitle';
import { useGetAllCategoryQuery } from '@/redux/api/categoryApi';
import Link from 'next/link';
import { Skeleton } from 'antd';

function Category() {
  const { data, isLoading, isError, isFetching } = useGetAllCategoryQuery({});
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000); // Set a timeout to show the skeleton for 2 seconds (adjust as needed)
    
    return () => clearTimeout(timeout);
  }, []); // Run this effect only on initial mount

  if ((isLoading || isFetching) && showSkeleton) {
    return (
      <div className="container">
        <SectionTitle title='Event Category' />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              <Skeleton avatar paragraph={{ rows: 4 }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='text-red-600 text-center text-2xl font-serif'>Data failed to load</div>
    );
  }

  return (
    <section className="py-4">
      <div className="container">
        <SectionTitle title='Event Category' />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {data?.Category?.map((category: any) => (
            <div key={category.id}>
              <CategoryCard
                href={`/category/${category.id}`}
                categoryImg={category.image}
                name={category.name}
              />
            </div>
          ))}
        </div>
        <div className='w-full flex items-center justify-center mt-4'>
          <Link href={`/category`} className='p-4 bg-[#FF5B22] rounded-md text-white hover:text-white font-serif'>Get All Category</Link>
        </div>
      </div>
    </section>
  );
}

export default Category;
