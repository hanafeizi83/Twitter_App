import React from 'react'
import Post from './Post'
import { POSTS } from './../../utils/db/dummy'
function Posts() {
  return (
    <div className=''>
      {
        POSTS.map(post => {
          return <Post post={post} key={post._id} />
        })
      }
    </div>
  )
}

export default Posts
