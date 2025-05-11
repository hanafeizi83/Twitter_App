import React from 'react'
import { USERS_FOR_RIGHT_PANEL } from './../utils/db/dummy'
import { Link } from 'react-router-dom';
import useSuggestedUsers from '../hook/useSuggestedUsers';
import useFollow from '../hook/useFollow';
import RightPanelSkeleton from './RightPanelSkeleton';
function RightPanel() {
    const { suggestedUsers, isLoading } = useSuggestedUsers();
    const { follow, isFollowing } = useFollow();

    console.log(suggestedUsers);

    return (
        <>
            <div className='bg-black w-[22%] rounded-md p-2 top-0 right-0 hidden lg:sticky self-start  lg:flex flex-col'>
                <h1 className='font-extrabold text-secondary-900 text-center mb-2'>Who to follow</h1>
                {
                    isLoading && <div className='bg-black w-[22%] rounded-md p-2 top-0 right-0 hidden lg:sticky self-start  lg:flex flex-col'>
                        <RightPanelSkeleton />
                        <RightPanelSkeleton />
                        <RightPanelSkeleton />
                    </div>
                }
                {
                    !isLoading && suggestedUsers && suggestedUsers.map(user => {
                            return <div key={user._id} className='grid grid-cols-[40px_1fr_65px] grid-rows-1 items-center mb-4'>
                                <Link to={`profile/${user.username}`}>
                                    <img src={user.profileImg || '/avatar-placeholder.png'} alt="" className='w-8 h-8 rounded-full' />
                                </Link>

                                <Link to={`profile/${user.username}`} className='text-center text-secondary-800'>
                                    <h2 className='font-extrabold text-sm'>{user.fullName}</h2>
                                    <p className='text-[12px] text-secondary-500'>@{user.username}</p>
                                </Link>
                                <button
                                    onClick={() => follow(user?._id)}
                                    className='bg-secondary-900 text-secondary-0 font-bold  rounded-full py-1'>Follow</button>
                            </div>
                        })
                }

            </div>
        </>
    )
}

export default RightPanel
