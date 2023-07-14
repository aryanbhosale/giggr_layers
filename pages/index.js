import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '@/components'
import { getPosts } from '@/services'
import { FeaturedPosts } from '../sections'

export default function Home({ posts }) {
  return (
    <div className="container mx-auto mb-8">
      <Head>
        <title>Giggr</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <FeaturedPosts /> */}
      <div className='grid grid-cols-1  gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {/* {posts.map((post) => <PostCard post={post.node} key={post.title} /> )} */}
          <PostCard post={posts[0].node} key={posts[0].title} /> 
           {/* <PostCard post={posts[1].node} key={posts[1].title} />
           <PostCard post={posts[2].node} key={posts[2].title} /> */}
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