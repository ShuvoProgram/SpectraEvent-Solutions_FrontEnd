import React from 'react'
import BlogCard from '../Blog/BlogCard';
import SectionTitle from '../shared/SectionTitle';

type BlogListProps = {
    title: string;
    subtitle?: string;
    hiddenBlogId?: string;
  };

function Blog({title, subtitle, hiddenBlogId}: BlogListProps) {
  return (
    <section className="py-14">
     <div className="container">
      <SectionTitle title='Blog'/>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
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
    </section>
  )
}

export default Blog;