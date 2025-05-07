import React from 'react'
import Post from './Post'
import { POSTS } from './../../utils/db/dummy'
import usePosts from './usePosts'
function Posts({ feedType }) {
  const { posts, isLoading } = usePosts(feedType);
  return (
    <div className=''>
      {
        posts && posts.map(post => {
          return <Post post={post} key={post._id} />
        })
      }
    </div>
  )
}

export default Posts
