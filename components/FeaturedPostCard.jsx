import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="hover:text-indigo-800 transition duration-500 transform hover:-translate-y-1 rounded-lg border-solid border-2 hover:border-indigo-800 border-gray-500 bg-center relative h-12 sm:h-16 md:h-16 lg:h-16 xl:h-16 w-64 sm:w-80 md:w-80 lg:w-80 xl:w-96 sm:mt-2 sm:mb-2 md:mt-4 lg:mt-4 xl:mt-8 md:mb-4 lg:mb-4 xl:mb-8 mb-4 mt-4">
    <Link className='cursor-pointer hover:text-indigo-800' href={`/post/${post.slug}`}>
    <div className="flex hover:text-indigo-800 flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      <p className={"hover:text-indigo-800 text-gray-800 mb-1 text-sm lg:text-lg sm:text-lg text-center"}>{post.title.toUpperCase()}</p>
    </div>
    </Link>
  </div>
);

export default FeaturedPostCard;