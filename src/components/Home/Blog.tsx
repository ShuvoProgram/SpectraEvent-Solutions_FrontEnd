"use client";
import React from 'react'
import BlogCard from '../Blog/BlogCard';
import SectionTitle from '../shared/SectionTitle';
import { useGetAllBlogQuery } from '@/redux/api/blogApi';
import { Skeleton } from 'antd';
import Spinner from '../Loading/Spinner';

function Blog() {
  const query: Record<string, any> = {};
  const {data, isLoading, isError} = useGetAllBlogQuery({...query})
  if(isLoading) {
    return <Spinner/>
  }
   // @ts-ignore
   const blogs = data?.blog?.data;
   // @ts-ignore
  console.log(data?.blog?.data);
  return (
    <section className="py-14">
     <div className="container">
      <SectionTitle title='Blog'/>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
      {!isError ? (
            blogs?.slice(0, 3)
              .map((blog: any) => (
                <div key={blog.id}>
                  {!isLoading ? (
                     <BlogCard 
                     adminId={blog?.adminId}
                      title={blog?.title} 
                      img={blog?.image} 
                      date={blog?.createdAt}
                      description={blog?.content}
                     contentType={blog?.contentType} 
                      id={blog?.id}
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
      </div>
    </section>
  )
}

export default Blog;