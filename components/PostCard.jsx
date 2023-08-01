import React from "react";
import moment from "moment";
import Link from "next/link";
import { FeaturedPosts } from "@/sections";

const PostCard = ({ post }) => {
  return (
    <div className=" bg-gray-100 relative rounded-lg p-8 lg:p-8 pb-12 mb-8 w-full">
      <div className="lg:flex md:flex sm:flex sm:flex-col md:flex-row lg:flex-row justify-around w-full">
        <div>
          <div className="flex flex-col md:h-64 lg:h-88">
            <div className="lg:w-full">
              <h1 className="lg:mt-8 text-center sm:text-center md:text-center xl:text-center text-black mb-8 text-2xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-7xl">
                <Link
                  className="transition duration-700 hover:text-indigo-800"
                  href={`/post/${post.slug}`}
                >
                  {post.title}
                </Link>
              </h1>
            </div>

            <div className="lg:w-full items-center">
              <p className="text-center xl:text-center sm:text-center md:text-center sm:text-2xl md:text-xl lg:text-xl text-gray-700 font-normal px-0 lg:px-0 mb-8">
                {post.excerpt}
              </p>
            </div>
          </div>
          <div className=" flex justify-center flex-col xl:py-24 lg:py-4 h-1/2 w-full">
            <h1 className="text-center font-semibold lg:text-center text-black mb-8 text-xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-5xl ">
              {post.videoText}
            </h1>
            <Link className="justify-center object-contain" href={post.videoUrl}>
              <div className="flex justify-center sm:-mt-4 sm:mb-4 -mt-6 ">
                <img
                
                  className="transition duration-500 transform hover:-translate-y-1 text-center hover:cursor-pointer w-1/12 mb-8"
                  alt="play-button"
                  src="play-button.png"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="h-fit bg-white flex flex-col justify-center align-center xl:me-8 items-center text-center">
          <FeaturedPosts
            categories={post.categories.map((category) => category.slug)}
            slug={post.slug}
          />
          <div className="text-center mb-8 w-full">
            <Link href={`post/${post.slug}`}>
              <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-black hover:bg-gray-800 md:text-lg lg:text-xl font-medium rounded-full text-white md:px-4 lg:px-11 sm:px-11 md:py-2 lg:py-4 sm:py-4 py-2 px-4 cursor-pointer">
                {post.buttonText}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
