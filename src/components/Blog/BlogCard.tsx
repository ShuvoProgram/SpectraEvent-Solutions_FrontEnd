import Image from 'next/image';
import React from 'react'
import {
    HeartFilled,
    HeartOutlined
  } from '@ant-design/icons';
import Link from 'next/link';

interface IBlogCard {
    author: string;
     title: string;
      date: string;
       img: string;
        description: string;
        liked: boolean;
        likeCount: number;
        link: string;
}

function BlogCard({author, title, date, img, description, liked, likeCount, link}: IBlogCard) {
  return (
    <div className="card">
    <div className="card-header">
      <div className="profile">
        <span className="letter">{author[0]}</span>
      </div>
      <div className="card-title-group">
        <h5 className="card-title">{title}</h5>
        <div className="card-date">{date}</div>
      </div>
    </div>
    <Link href={`${link}`}>
    <Image className="card-image" src={img} alt="Logo" width={400} height={300}/>
    </Link>
    <div className="card-text">{description}</div>
    <div className="card-like-bar">
      {liked ? (
        <HeartFilled className="card-like-icon"/>
      ) : (
        <HeartOutlined className="card-like-icon"/>
      )}
      <div className="like-text">
        <b>{likeCount}</b> kişi bu tarifi beğendi.
      </div>
    </div>
  </div>
  )
}

export default BlogCard