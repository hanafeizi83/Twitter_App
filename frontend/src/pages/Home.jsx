import React, { useState } from 'react'
import Posts from '../feature/post/Posts'
import CreatePost from './../feature/post/CreatePost'

function Home() {
    const [feedType, setFeedType] = useState('foryou');
    return (
        <div className='lg:w-[56%] h-screen w-full'>
            {/* Header */}
            <div className='w-full border-x flex items-center justify-between border-b border-secondary-300'>
                <div
                    onClick={() => setFeedType('foryou')}
                    className='flex-1 flex  justify-center relative text-center text-secondary-700 cursor-pointer p-2 hover:bg-secondary-200 transition-all duration-300'>
                    For You
                    {feedType === 'foryou' && <div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary-800'></div>}
                </div>
                <div
                    onClick={() => setFeedType('following')}
                    className='flex-1 relative flex  justify-center text-center text-secondary-700 cursor-pointer p-2 hover:bg-secondary-200 transition-all duration-300'>
                    Following
                    {feedType === 'following' && <div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary-800'></div>}
                </div>
            </div>
            <CreatePost />
            <Posts />
        </div>
    )
}

export default Home
