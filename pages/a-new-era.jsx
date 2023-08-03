import React from "react";
import moment from "moment";
import Link from "next/link";
import Head from "next/head";
import { FeaturedPosts } from "@/sections";

const ANewEra = ({ post }) => {
  return (
    <div className=" bg-white relative rounded-lg p-8 lg:p-8 w-full">
        <Head>
        <title>A New Era</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="lg:flex md:flex sm:flex sm:flex-col md:flex-row lg:flex-row justify-between w-full">
        <div className="mt-16 px-8">
          <div className="flex flex-col md:h-64 h-3/5">
            <div className="lg:w-full">
              <h1 className="sm:mt-0 mt-8 text-center sm:text-center md:text-center xl:text-center text-black mb-8 text-2xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-5xl">
                <Link
                  className="transition duration-700 hover:text-indigo-800"
                  href={`/a-new-era`}
                >
                  A New Era
                </Link>
              </h1>
            </div>

            <div className="lg:w-full items-center">
              <p className="text-center xl:text-center sm:text-center md:text-center sm:text-2xl md:text-xl lg:text-xl text-gray-700 font-normal px-0 lg:px-0 mb-8">
                THE FIVE MARKERS
              </p>
            </div>
          </div>
          
        </div>
        <div className="h-fit bg-white flex flex-col justify-center align-center items-center text-center">
          <div className="sm:px-8 px-auto sm:m-8">
            <div className="flex flex-col px-8 sm:justify-center justify-right">
              <div className="hover:text-indigo-800 transition duration-500 transform hover:-translate-y-1 rounded-lg border-solid border-2 hover:border-indigo-800 border-gray-500 bg-center relative h-12 sm:h-16 md:h-16 lg:h-16 xl:h-16 w-64 sm:w-80 md:w-80 lg:w-80 xl:w-96 sm:mt-0 sm:mb-0 md:mt-0 lg:mt-0 xl:mt-0 md:mb-0 lg:mb-0 xl:mb-0 mb-0 mt-0">
                <Link
                  className="cursor-pointer hover:text-indigo-800"
                  href={`/a-human-ecosystem`}
                >
                  <div className="flex hover:text-indigo-800 flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                    <p
                      className={
                        "hover:text-indigo-800 text-gray-800 mb-1 text-sm lg:text-lg sm:text-lg text-center"
                      }
                    >
                      A HUMAN ECOSYSTEM
                    </p>
                  </div>
                </Link>
              </div>
              <div className="hover:text-indigo-800 transition duration-500 transform hover:-translate-y-1 rounded-lg border-solid border-2 hover:border-indigo-800 border-gray-500 bg-center relative h-12 sm:h-16 md:h-16 lg:h-16 xl:h-16 w-64 sm:w-80 md:w-80 lg:w-80 xl:w-96 sm:mt-2 sm:mb-2 md:mt-4 lg:mt-4 xl:mt-8 md:mb-4 lg:mb-4 xl:mb-8 mb-4 mt-4">
                <Link
                  className="cursor-pointer hover:text-indigo-800"
                  href={`/transversal-technologies`}
                >
                  <div className="flex hover:text-indigo-800 flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                    <p
                      className={
                        "hover:text-indigo-800 text-gray-800 mb-1 text-sm lg:text-lg sm:text-lg text-center"
                      }
                    >
                      TRANSVERSAL TECHNOLOGIES
                    </p>
                  </div>
                </Link>
              </div>
              <div className="hover:text-indigo-800 transition duration-500 transform hover:-translate-y-1 rounded-lg border-solid border-2 hover:border-indigo-800 border-gray-500 bg-center relative h-12 sm:h-16 md:h-16 lg:h-16 xl:h-16 w-64 sm:w-80 md:w-80 lg:w-80 xl:w-96 sm:mt-0 sm:mb-0 md:mt-0 lg:mt-0 xl:mt-0 md:mb-0 lg:mb-0 xl:mb-0 mb-0 mt-0">
                <Link
                  className="cursor-pointer hover:text-indigo-800"
                  href={`/changing-demography`}
                >
                  <div className="flex hover:text-indigo-800 flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                    <p
                      className={
                        "hover:text-indigo-800 text-gray-800 mb-1 text-sm lg:text-lg sm:text-lg text-center"
                      }
                    >
                      CHANGING DEMOGRAPHY
                    </p>
                  </div>
                </Link>
              </div>
              <div className="hover:text-indigo-800 transition duration-500 transform hover:-translate-y-1 rounded-lg border-solid border-2 hover:border-indigo-800 border-gray-500 bg-center relative h-12 sm:h-16 md:h-16 lg:h-16 xl:h-16 w-64 sm:w-80 md:w-80 lg:w-80 xl:w-96 sm:mt-2 sm:mb-2 md:mt-4 lg:mt-4 xl:mt-8 md:mb-4 lg:mb-4 xl:mb-8 mb-4 mt-4">
                <Link
                  className="cursor-pointer hover:text-indigo-800"
                  href={`/new-resources-materials-and-energy`}
                >
                  <div className="flex hover:text-indigo-800 flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                    <p
                      className={
                        "hover:text-indigo-800 text-gray-800 mb-1 text-sm lg:text-lg sm:text-lg text-center"
                      }
                    >
                      NEW RESOURCES, MATERIALS & ENERGY
                    </p>
                  </div>
                </Link>
              </div>
              <div className="hover:text-indigo-800 transition duration-500 transform hover:-translate-y-1 rounded-lg border-solid border-2 hover:border-indigo-800 border-gray-500 bg-center relative h-12 sm:h-16 md:h-16 lg:h-16 xl:h-16 w-64 sm:w-80 md:w-80 lg:w-80 xl:w-96 sm:mt-0 sm:mb-0 md:mt-0 lg:mt-0 xl:mt-0 md:mb-0 lg:mb-0 xl:mb-0 mb-4 mt-0">
                <Link
                  className="cursor-pointer hover:text-indigo-800"
                  href={`/financial-capital-at-the-sweet-spot-of-value-intellectual-and-human-capital`}
                >
                  <div className="flex hover:text-indigo-800 flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                    <p
                      className={
                        "hover:text-indigo-800 text-gray-800 mb-1 text-xs lg:text-md xl:lg  sm:text-sm text-center"
                      }
                    >
                      Financial Capital at the sweet spot of Value, Intellectual & Human Capital
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mb-8 w-full">
            <Link href={`/a-new-era`}>
              <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-black hover:bg-gray-800 md:text-lg lg:text-xl font-medium rounded-full text-white md:px-4 lg:px-11 sm:px-11 md:py-2 lg:py-4 sm:py-4 py-2 px-4 cursor-pointer">
                DON{"'"}T GET LEFT BEHIND
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ANewEra;
