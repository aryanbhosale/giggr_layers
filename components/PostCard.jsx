import React from "react";
import moment from "moment";
import Link from "next/link";
import { FeaturedPosts } from "@/sections";

const PostCard = ({ post }) => {
  return (
    <div className="container shadow-lg bg-white rounded-lg p-8 lg:p-8 pb-12 mb-8 w-full">
      {/* <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage[0]?.url}
          alt={post?.title}
          height={"fit-content"}
          className="object-top absolute h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div> */}
      <h1 className="mt-24 transition duration-700 text-left text-purple-800 mb-8 hover:text-indigo-500 text-6xl lg:text-8xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      {/* <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt={post.author.name}
            height={"30px"}
            width={"30px"}
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-gray-700 ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div> */}
      <div className="w-4/6">
        <p className="text-center  text-2xl text-gray-700 font-normal px-0 lg:px-0 mb-8">{post.excerpt}</p>
        <div className="text-center mb-8 w-full">
          <Link href={`post/${post.slug}`}>
              <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-purple-800 hover:bg-indigo-500 text-xl font-medium rounded-full text-white px-11 py-4 font-semibold cursor-pointer">
                  Learn More
              </span>
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <FeaturedPosts categories={post.categories.map((category) => category.slug)} slug={post.slug} />
      </div>
    </div>
  );
};

export default PostCard;
