import React from 'react'
import Post from './Post'
import { POSTS } from './../../utils/db/dummy'
import usePosts from './usePosts'
function Posts({ feedType, username }) {
  const { posts, isLoading } = usePosts(feedType, username);

  if (posts && !posts.length) return <p>No posts in this page . Switch 👻</p>
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
