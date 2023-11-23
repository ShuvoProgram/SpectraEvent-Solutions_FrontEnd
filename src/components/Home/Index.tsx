"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import Story from '@/components/Home/Story';
import Brand from '@/components/Home/Brand';
import FeatureEvent from '@/components/Home/Feature';
import Blog from '@/components/Home/Blog';
import Team from '@/components/Home/Team';
import Category from '@/components/Home/Category';
import UpcommingEvents from '@/components/Home/UpcommingEvents';
import HeroSection from '@/components/Home/HeroSection';
import ClientReview from '@/components/Home/ClientReview';
import FeedbackForm from '@/components/Home/FeedbackForm';
import Intro from '@/components/Home/Intro';
import Spinner from '@/components/Loading/Spinner';

const componentMap = [
    HeroSection,
    Category,
    FeatureEvent,
    UpcommingEvents,
    Story,
    Team,
    Brand,
    ClientReview,
    Intro,
    Blog,
    FeedbackForm,
  ];

  export default function HomePage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true); // Set loading to true when components start rendering
      setLoading(false); // Set loading to false when all components have rendered
    }, []); // Empty dependency array ensures this effect runs only once

    return (

        <div className='mt-16 md:5'>
          {loading ? (
           <Spinner/> // Show loading indicator while components are rendering
          ) : (
            componentMap.map((Component, index) => (
              <Component key={index} />
            ))
          )}
        </div>
    );
  }
