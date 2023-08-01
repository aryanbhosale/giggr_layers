import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { PostCard } from '@/components'
import { getPosts } from '@/services'


export default function Home({ posts }) {
  return (
    <div className=" mx-auto mb-8">
      <Head>
        <title>Giggr</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <FeaturedPosts /> */}
      <div className='grid grid-cols-1 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => 
          post.node.featuredPost ? <PostCard post={post.node} key={post.title} /> : null
          )}
          
          {/* <PostCard0 post={posts[0].node} key={posts[0].title} /> 
           <PostCard1 post={posts[4].node} key={posts[4].title} />
           <PostCard2 post={posts[8].node} key={posts[8].title} /> */}
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