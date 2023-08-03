import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="mx-8 hover:text-indigo-800 transition duration-500 transform hover:translate-x-1 rounded-lg border-solid border-2 hover:border-indigo-800 border-gray-500 bg-center relative h-12 sm:h-16 md:h-16 lg:h-16 xl:h-16 w-48 sm:w-48 md:w-40 lg:w-48 xl:w-48 sm:mt-0 sm:mb-0 md:mt-0 lg:mt-0 xl:mt-0 md:mb-0 lg:mb-0 xl:mb-0 mb-0 mt-0">
    <Link className='cursor-pointer hover:text-indigo-800' href={`/post/${post.slug}`}>
    <div className="flex hover:text-indigo-800 flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className={"hover:text-indigo-800 text-gray-800 mb-1 text-sm lg:text-md sm:text-md text-center"}>{post.title.toUpperCase()}</p>
    </div>
    </Link>
  </div>
);

export default FeaturedPostCard;