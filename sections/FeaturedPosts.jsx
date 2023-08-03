import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FeaturedPostCard } from '../components';
import { getFeaturedPosts, getSimilarPosts } from '../services';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 476 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 475, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = ({ categories, slug }) => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  // useEffect(() => {
  //   getSimilarPosts(["pursuing-excellence"], "pursuing-excellence").then((result) => {
  //     setFeaturedPosts(result);
  //     setDataLoaded(true);
  //   });
  // }, [categories, slug]);
  // console.log(featuredPosts)

  useEffect(() => {
    getSimilarPosts(categories, slug).then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, [categories, slug]);

 

  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-purple-800 hover:bg-indigo-500 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-6 lg:w-6 h-3 w-3 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-purple-800 hover:bg-indigo-500 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );

  return (
    <div className=" sm:px-8 px-auto sm:m-8">
      <Carousel containerClass="justify-center align-center items-center" ssr={true} infinite responsive={responsive}>
        {dataLoaded && featuredPosts.map((post, index) => (
          <FeaturedPostCard key={index} post={post} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;