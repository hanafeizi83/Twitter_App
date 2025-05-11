import React, { useEffect } from 'react'
import Post from './Post'
import usePosts from './usePosts'
import PostSkeleton from '../../ui/PostSkeleton ';
function Posts({ feedType, username, userId }) {
  const { posts, isLoading, refetch, isRefetching } = usePosts(feedType, username, userId);

  useEffect(() => {
    refetch();
  }, [feedType, username, refetch])

  if (posts && !posts.length) return <p className='text-secondary-400 text-center p-4 border-x border-secondary-300'>No posts in this page . Switch 👻</p>
  return (
    <>
      {

        isLoading || isRefetching && <div> <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </div>
      }
      {

        !isLoading && !isRefetching && posts && posts.map(post => {
          return <div> <Post post={post} key={post._id} /> </div>
        })

      }
    </>
  )
}

export default Posts
