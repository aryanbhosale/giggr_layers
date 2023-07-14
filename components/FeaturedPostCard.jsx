import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="mt-9 transition duration-500 transform hover:-translate-y-1 rounded-lg bg-center bg-purple-800 hover:bg-indigo-500 relative h-20 w-55">
    <Link className='cursor-pointer' href={`/post/${post.slug}`}>
    {/* <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredImage[0].url}')` }} /> */}
    <div className="absolute w-full h-full" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      {/* <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p> */}
      <p className="text-white mb-1 text-shadow font-semibold text-xl text-center">{post.title.toUpperCase()}</p>
      {/* <div className="flex items-center absolute bottom-5 w-full justify-center">
        <img
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.author.name}</p>
      </div> */}
    </div>
    {/* <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link> */}
    </Link>
  </div>
);

export default FeaturedPostCard;