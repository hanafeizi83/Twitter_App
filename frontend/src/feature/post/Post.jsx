import React, { useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs';
import { FaRegComment } from "react-icons/fa";
import { RiShareForward2Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import Modal from '../../ui/Modal';
import Comments from './Comments';
import useUser from '../../hook/useUser';
import useDeletePost from './useDeletePost';

function Post({ post }) {
  const { authUser } = useUser();
  const { isDeleting, deletePost } = useDeletePost();
  console.log(authUser);
  console.log(post);
  const handleDeletePost = () => {
    deletePost(post?._id)
  }
  const isMyPost = authUser?._id === post?.user?._id;
  const isLiked = true;
  const date = '1h';
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='border border-secondary-300'>
        {/* Post Header */}
        <div className='flex gap-2 px-4 py-2'>
          <img src={post.user.profileImg || '/avatar-placeholder.png'} alt="" className='rounded-full w-8 h-8' />
          <div className='w-full '>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <h2 className='text-secondary-800 font-bold'>{post.user.fullName}</h2>
                <p className='text-secondary-200 text-sm'> @{post.user.username} - {date}</p>
              </div>
              {
                isMyPost &&
                <BsFillTrashFill
                  className='text-secondary-800 cursor-pointer transition-all duration-300 hover:text-red-600'
                  onClick={handleDeletePost}
                />
              }
            </div>
            {/* Post Cotent */}
            <div>
              <p className='text-secondary-800 text-center py-2'>{post.text} </p>
              {
                post.img &&
                <img src={post.img} alt="" className='w-full border border-secondary-400 rounded' />
              }
            </div>
            {/* Post Footer */}
            <div className='flex items-center justify-between py-2'>
              <div
                onClick={() => setOpen(true)}
                className='flex items-center text-secondary-400 hover:text-cyan-300 gap-1 transition-all duration-300 cursor-pointer'>
                <FaRegComment />
                <span>{post.comments.length}</span>
              </div>
              <div className='flex items-center text-secondary-400 hover:text-green-300 gap-1 transition-all duration-300 cursor-pointer'>
                <RiShareForward2Fill />
                <span >{post?.share?.length || 0}</span>
              </div>
              <div className={`flex items-center hover:text-pink-500 gap-1 transition-all duration-300 cursor-pointer  ${isLiked ? 'text-pink-500' : 'text-secondary-400'}`}>
                <FaRegHeart />
                <span className={`${isLiked ? 'text-pink-500' : 'text-secondary-400'} `}>{post?.likes?.length}</span>
              </div>
              <div className='flex items-center text-secondary-400 gap-1 transition-all duration-300 cursor-pointer'>
                <FaRegBookmark />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title='COMMENTS'>
        <Comments comments={post?.comments} />
      </Modal>
    </>
  )
}

export default Post
