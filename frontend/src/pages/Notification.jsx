import React from 'react'
import { FaHeart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import NotificationSetting from '../ui/NotificationSetting';
import useNotification from '../hook/useNotification';

function Notification() {
    const notificationType = 'liked';
    const { notifications } = useNotification();
    console.log(notifications);
    
    return (
        <div className='border-x border-secondary-300 lg:w-[56%] h-screen w-full'>
            {/* Notification Header */}
            <div className='p-4 border-b border-secondary-300 flex justify-between items-center'>
                <h2 className='font-extrabold text-secondary-800'>Notifications</h2>

                <NotificationSetting />
            </div>

            <div>
                <div className='flex p-4 gap-2 border-y border-y-secondary-300'>
                    {notificationType == 'followed' && <FaUser className='w-7 h-7 text-primary-800' />}
                    {notificationType == 'liked' && <FaHeart className='w-7 h-7 text-red-500' />}
                    <div className='flex flex-col items-center'>
                        <Link to={`/profile/hana`}>
                            <img src="/avatars/boy2.png" alt="profileImg" className='w-8 h-8' />
                        </Link>
                        <Link to={`/profile/hana`} className='flex text-secondary-700 gap-2'>
                            <h3 className='font-bold'>@hana</h3>
                            {notificationType == 'followed' && <p className='text-secondary-700'>followed you</p>}
                            {notificationType == 'liked' && <p className='text-secondary-700'>liked your post</p>}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification
