import React, { useState } from 'react'
import Posts from '../feature/post/Posts'
import CreatePost from './../feature/post/CreatePost'

function Home() {
    const [feedType, setFeedType] = useState('forYou');
    return (
        <div className='lg:w-[56%] w-full border-x border-secondary-400'>
            {/* Header */}
            <div className='w-full border-x flex items-center justify-between border-b border-secondary-300'>
                <div
                    onClick={() => setFeedType('forYou')}
                    className='flex-1 flex  justify-center relative text-center text-secondary-700 cursor-pointer p-2 hover:bg-secondary-200 transition-all duration-300'>
                    For You
                    {feedType === 'forYou' && <div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary-800'></div>}
                </div>
                <div
                    onClick={() => setFeedType('following')}
                    className='flex-1 relative flex  justify-center text-center text-secondary-700 cursor-pointer p-2 hover:bg-secondary-200 transition-all duration-300'>
                    Following
                    {feedType === 'following' && <div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary-800'></div>}
                </div>
            </div>
            <CreatePost />
            <Posts feedType={feedType} />
        </div>
    )
}

export default Home
