import React, { useEffect } from 'react'
import Post from './Post'
import usePosts from './usePosts'
function Posts({ feedType, username, userId }) {
  const { posts, isLoading, refetch } = usePosts(feedType, username, userId);
  useEffect(() => {
    refetch();
  }, [feedType, username, refetch])
  if (posts && !posts.length) return <p className='text-secondary-400 text-center p-4 border-x border-secondary-300'>No posts in this page . Switch 👻</p>
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
