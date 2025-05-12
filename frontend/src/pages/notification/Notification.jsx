import React from 'react'
import { FaHeart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import NotificationSetting from '../../ui/NotificationSetting';
import useNotification from './useNotification';
import Loading from './../../ui/Loading'
import useDeleteNotifications from './useDeleteNotifications';

function Notification() {
    const { notifications, isLoading } = useNotification();
    const { isDeleting } = useDeleteNotifications();

    return (
        <div className='border-x border-secondary-300 lg:w-[56%] h-screen w-full'>
            {/* Notification Header */}
            <div className='p-4 border-b border-secondary-300 flex justify-between items-center'>
                <h2 className='font-extrabold text-secondary-800'>Notifications</h2>

                <NotificationSetting />
            </div>

            <div>
                {
                    (isLoading || isDeleting) && <div className='w-full h-screen flex items-center justify-center'>  <Loading size='xl' /> </div>
                }
                {
                    !isLoading && notifications && !notifications.length && <h2 className='font-bold text-secondary-800 text-center py-4'>No Notification 🤔</h2>
                }
                {
                    !isLoading && notifications && notifications.map((item) => {
                        return <div className='flex p-4 gap-2 border border-secondary-300'>
                            {item.type == 'follow' && <FaUser className='w-7 h-7 text-primary-800' />}
                            {item.type == 'like' && <FaHeart className='w-7 h-7 text-red-500' />}
                            <div className='flex flex-col items-center'>
                                <Link to={`/profile/${item?.from?.username}`}>
                                    <img src={item?.from?.profileImg} alt="profileImg" className='w-8 h-8' />
                                </Link>
                                <Link to={`/profile/${item?.from?.username}`} className='flex text-secondary-700 gap-2'>
                                    <h3 className='font-bold'>@{item?.from?.username}</h3>
                                    {item.type == 'follow' && <p className='text-secondary-700'>followed you</p>}
                                    {item.type == 'like' && <p className='text-secondary-700'>liked your post</p>}
                                </Link>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Notification
