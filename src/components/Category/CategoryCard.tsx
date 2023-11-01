import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface ICategory {
    href: string;
    categoryImg: string;
    name: string;
}

function CategoryCard({href, categoryImg, name}: ICategory) {
    return (
        <div className="item h-[250px] w-[350px]">
        <Link href={href}>
          <div style={{
            height: "100%",
            backgroundImage: `url(${categoryImg})`,
            backgroundPosition: "center",
            borderRadius: "4px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transition: "all 0.7 ease"
          }}></div>
          <p className="title font-serif">{name}</p>
        </Link>
      </div>
    )
}

export default CategoryCard;