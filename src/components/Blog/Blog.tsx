"use client";
import { useGetAllBlogQuery } from '@/redux/api/blogApi';
import React from 'react'
import Spinner from '../Loading/Spinner';
import BreadCrumb from '../shared/BreadCrumb';
import BlogCard from './BlogCard';
import { Skeleton } from 'antd';

function Blog() {
    const query: Record<string, any> = {};
  const {data, isLoading, isError} = useGetAllBlogQuery({...query})
  if(isLoading) {
    return <Spinner/>
  }
   // @ts-ignore
   const blogs = data?.blog?.data;
  return (
    <div className='container mt-24 md:mt-16'>
        <h1
        style={{
          margin: "20px 0px",
          color: "#FF5B22",
          fontSize: "40px",
          fontFamily: "serif",
          fontWeight: "bold",
          textAlign: "center"
        }}
      >Blog</h1>
     <div className='flex items-center justify-center'>
     <BreadCrumb 
      items={[
        {
          label: "Blog",
          link: "/blog",
        },
      ]}
      />
     </div>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
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
  )
}

export default Blog