import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { PostCard, PostCard1, PostCard2 } from '@/components'
import { getPosts } from '@/services'


// {
//   "author": {
//       "bio": "I am a highly skilled and motivated Web Developer and Electronics and Communications major, specializing in Embedded Systems and IoT engineering, Data Analysis, and Software Development. With a strong background in both programming and hardware, I possess a unique blend of technical expertise that allows me to bridge the gap between software and hardware solutions. I thrive in challenging environments and excel at leading teams, evident through my role as the Web Development Head at DevSoc and being one of the four teaching assistants in practice school 1 for over 3000 students and professors.",
//       "name": "Aryan",
//       "id": "cljwp5hlk01ue0bpqv9nn72xs",
//       "photo": {
//           "url": "https://media.graphassets.com/oXZd83jsRtex6xpKmRJ2"
//       }
//   },
//   "createdAt": "2023-07-14T15:46:16.107934+00:00",
//   "slug": "pursuing-excellence",
//   "title": "Pursuing Excellence",
//   "excerpt": "With Design Thinking",
//   "featuredPost": true,
//   "buttonText": "CHECK IN",
//   "videoText": "Rewire Your Mindset",
//   "videoUrl": "https://www.youtube.com/embed/7NK_JOkuSVY",
//   "featuredImage": [
//       {
//           "url": "https://media.graphassets.com/bme4QMAiQ0CJwhPuK63e"
//       }
//   ],
//   "categories": [
//       {
//           "name": "Growth mindset",
//           "slug": "growth-mindset"
//       },
//       {
//           "name": "Embracing Challenges",
//           "slug": "embracing-challenges"
//       },
//       {
//           "name": "Commitment to daily practice",
//           "slug": "commitment-to-daily-practice"
//       },
//       {
//           "name": "Pursuing Excellence",
//           "slug": "pursuing-excellence"
//       }
//   ]
// }

export default function Home({ posts }) {
  console.log(posts[0].node)
  return (
    <div className=" mx-auto mb-8">
      <Head>
        <title>Giggr</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <FeaturedPosts /> */}
      <div className='-mt-8 grid grid-cols-1 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {/* {posts.map((post) => 
          post.node.featuredPost ? <PostCard post={post.node} key={post.title} /> : null
          )} */}
          
          <PostCard /> 
           <PostCard1 />
           <PostCard2 />
        </div>
        {/* <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget /> // RECENT POSTS
              <Categories />
            </div>
        </div> */}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}