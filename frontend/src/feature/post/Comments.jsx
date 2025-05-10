import React, { useState } from 'react'
import useCreateComment from './useCreateComment';

function Comments({ comments, postId, onClose }) {
    const { createComment, isCreating } = useCreateComment();
    const [comment, setComment] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        createComment({ id: postId, data: { text: comment } }, {
            onSuccess: () => {
                setComment('')
            }
        })
    }
    return (
        <div>
            <div className='space-y-4 border-b border-b-secondary-400 pb-4'>
                {!comments.length && <p className='text-secondary-400 text-center py-4'>No comments yet 😕 Be the first one 😉</p>}
                {comments && comments.map(comment => {
                    return <div className='flex items-start gap-2'>
                        <img src={comment.user.profileImg} alt="profileImg" className='w-10 h-10 rounded-full ' />
                        <div>
                            <h2 className='text-secondary-800 font-bold text-md'>{comment.user.fullName}  <span className='text-secondary-400 font-light text-sm'> @{comment.user.username}</span></h2>
                            <p className='text-secondary-700 text-md'>{comment.text}</p>
                        </div>
                    </div>
                })
                }
            </div>
            <form onSubmit={handleSubmit} className='flex items-center justify-between mt-4'>
                <textarea
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='Add a comment'
                    className='w-[83%] h-24 bg-secondary-100 border border-secondary-200 border-b-2 border-b-secondary-300 rounded-md p-1 resize-none placeholder:text-secondary-400 text-secondary-700 flex items-start' />
                <button type='submit' className='btn-primary w-[15%] py-1'>Post</button>
            </form>
        </div>
    )
}

export default Comments
