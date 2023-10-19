import React from 'react'
import { Col, Row } from 'antd';
import BlogCard from '@/components/Blog/BlogCard';
import BreadCrumb from '@/components/shared/BreadCrumb';


function page() {
  const items = {
    label: 'Blog',
    link: '/blog'
  }
  return (
    <div className='pt-28 px-4 pb-8'>
     <div className=''>
     <BreadCrumb 
      items={[
        {
          label: "Blog",
          link: "/blog",
        },
      ]}
      />
     </div>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-4">
      <BlogCard 
      author='shuvo'
       title='john' 
       img='https://i.ibb.co/b36rWjT/1.png' 
       date='12-2-23' description='test' 
       liked={true} 
       likeCount={12} 
       link={`/`}/>
       <BlogCard 
      author='shuvo'
       title='john' 
       img='https://i.ibb.co/b36rWjT/1.png' 
       date='12-2-23' description='test' 
       liked={true} 
       likeCount={12} 
       link={`/`}/>
       <BlogCard 
      author='shuvo'
       title='john' 
       img='https://i.ibb.co/b36rWjT/1.png' 
       date='12-2-23' description='test' 
       liked={true} 
       likeCount={12} 
       link={`/`}/>
       <BlogCard 
      author='shuvo'
       title='john' 
       img='https://i.ibb.co/b36rWjT/1.png' 
       date='12-2-23' description='test' 
       liked={true} 
       likeCount={12} 
       link={`/`}/>
        </div>
    </div>
  )
}

export default page