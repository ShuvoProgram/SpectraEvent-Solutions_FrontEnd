import React from 'react'
import BlogCard from '../Blog/BlogCard';

type BlogListProps = {
    title: string;
    subtitle?: string;
    hiddenBlogId?: string;
  };

function Blog({title, subtitle, hiddenBlogId}: BlogListProps) {
  return (
    <section className="grow-today">
        <div className="container">
        <div className="sub-title mb-1" id="grow-today">
        <span className="text-gradient-pink">{subtitle}</span>
      </div>
      <div className="text-3xl text-black font-semibold">{title}</div>
      <div className="mt-5 row gap">
      <div className="col-12 col-md-6 col-lg-4">
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
       </div>
    </section>
  )
}

export default Blog;