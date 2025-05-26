import React, { useEffect, useRef, useState } from 'react'
import { FaArrowLeft, FaLink } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom'
import { MdEdit } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import Posts from '../../feature/post/Posts'
import Modal from '../../ui/Modal';
import ProfileUpdateForm from './ProfileUpdateForm';
import useUser from '../../hook/useUser';
import useUserProfile from './useUserProfile';
import { formatMemberSinceDate } from './../../utils/date/index'
import usePosts from '../../feature/post/usePosts';
import useEditProfile from './useEditProfile';
import Loading from './../../ui/Loading'
import useFollow from '../../hook/useFollow';
import ProfileSkeleton from '../../ui/ProfileSkeleton';
import PostSkeleton from '../../ui/PostSkeleton ';

function Profile() {
    const [open, setOpen] = useState(false)
    const [coverImg, setCoverImg] = useState();
    const [userImg, setUserImg] = useState();
    const [feedType, setFeedType] = useState('posts');

    const { username } = useParams();

    const coverImgRef = useRef();
    const userImgRef = useRef();

    const { authUser } = useUser();
    const { user, isLoading, refetch, isRefetching } = useUserProfile(username);
    const { posts } = usePosts(feedType, username);
    const { editProfile, isEditing } = useEditProfile();
    const { follow, isFollowing } = useFollow();

    const handelChange = (e, state) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (state === 'coverImg') setCoverImg(reader.result);
                if (state === 'userImg') setUserImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const isMyProfile = authUser?._id === user?._id;
    const amIFollowing = authUser?.following.includes(user?._id);
    const memberSinceDate = formatMemberSinceDate(user?.createdAt);

    // console.log(feedType);
    // console.log(user, authUser);

    useEffect(() => {
        refetch();
    }, [username, refetch])
    return (
        <>
            {
                (isLoading || isRefetching) && <div className='flex flex-col w-full'>
                    <ProfileSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                </div>
            }
            {
                !isLoading && !isRefetching && <>
                    <div className='w-full border-x border-secondary-300'>
                        {/* Profile Header */}
                        <div className='flex items-center text-secondary-800 p-4 gap-8'>
                            <Link to={'/'}>
                                <FaArrowLeft className='w-5 h-5' />
                            </Link>
                            <div className='flex flex-col items-center'>
                                <h3 className='font-bold '>{user?.fullName}</h3>
                                <p className='text-sm text-secondary-400'>{posts && posts.length} posts</p>
                            </div>
                        </div>
                        {/* Prfile Images */}
                        <div className='relative'>
                            <div className='relative h-48 w-full group'>
                                <img src={coverImg || user?.coverImg || '/cover.png'} alt="" className='h-full w-full' />
                                {
                                    isMyProfile && <div
                                        className='bg-secondary-300 text-secondary-900 rounded-full p-1 w-6 h-6 cursor-pointer absolute top-2 right-2 hidden group-hover:block'
                                        onClick={() => coverImgRef.current.click()}
                                    >

                                        <MdEdit className='w-full h-full' />
                                    </div>
                                }

                            </div>
                            <div className='absolute top-24 flex items-center justify-between p-4 w-full'>
                                <div className='relative group'>
                                    <img src={userImg || user?.profileImg || '/avatar-placeholder.png'} alt="" className='w-36 h-36 rounded-full' />
                                    {
                                        isMyProfile && <div
                                            className='bg-primary-900 text-secondary-900 rounded-full p-1 w-6 h-6 cursor-pointer absolute top-4 right-6 hidden group-hover:block'
                                            onClick={() => userImgRef.current.click()}
                                        >
                                            <MdEdit className='w-full h-full' />
                                        </div>
                                    }

                                </div>
                                <input type="file" hidden name='coverImg' ref={coverImgRef} onChange={(e) => handelChange(e, 'coverImg')} />
                                <input type="file" hidden name='userImg' ref={userImgRef} onChange={(e) => handelChange(e, 'userImg')} />
                                {
                                    isMyProfile ?
                                        <>
                                            <div className='absolute right-2 top-28 space-x-2'>
                                                <button
                                                    onClick={() => setOpen(true)}
                                                    className='text-secondary-800 border border-secondary-700 px-3 py-1 rounded-full '>Edit Profile</button>
                                                {(userImg || coverImg) && <button
                                                    onClick={async () => {
                                                        await editProfile({ coverImg, profileImg: userImg }, {
                                                            onSuccess: () => {
                                                                setCoverImg(null)
                                                                setUserImg(null)
                                                            }
                                                        });

                                                    }}
                                                    className='bg-primary-900 text-secondary-800 px-3 py-1 rounded-full'>
                                                    {isEditing ? 'Updating...' : 'Update'}
                                                </button>}
                                            </div>
                                        </>
                                        :
                                        <button
                                            onClick={() => follow(user?._id)}
                                            className='absolute right-4 top-28 bg-secondary-900 rounded-full text-secondary-0 font-bold px-3 py-1 transition-all duration-300 hover:bg-black hover:text-secondary-800'>
                                            { }
                                            {isFollowing ? <Loading size='md' /> : (amIFollowing ? 'Unfollow' : 'Follow')}

                                        </button>
                                }
                            </div>

                        </div>
                        {/* Profile Cotext */}
                        <div className='mt-24 text-secondary-800 text-center p-4'>
                            <h2 className='font-bold '>{user?.fullName}</h2>
                            <p className='text-secondary-400'>@{user?.username}</p>
                            <p>{user?.bio}</p>
                            <div className='md:flex items-center gap-y-4 md:gap-2 mt-4'>
                                <a
                                    className='text-primary-800 flex items-center gap-1'
                                    href={user?.link}>
                                    {user?.link && <FaLink className='w-3 h-3 text-secondary-400' />}
                                    {user?.link}
                                </a>
                                <div className='flex items-start gap-2 '>
                                    <IoCalendarOutline className='w-4 h-4 text-secondary-400' />
                                    <span className='text-secondary-400 text-sm'>{memberSinceDate}</span>
                                </div>

                            </div>
                            <div className='flex items-center gap-2 mt-4'>
                                <div className='flex items-center gap-1'>
                                    <h2 className='font-sm text-secondary-800'>{user?.following.length}</h2>
                                    <span className='text-secondary-400'>Following</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <h2 className='font-sm text-secondary-800'>{user?.followers.length}</h2>
                                    <span className='text-secondary-400'>Followers</span>
                                </div>

                            </div>
                        </div>
                        <div className='w-full flex items-center justify-between border-b border-b-secondary-300'>
                            <div
                                onClick={() => setFeedType('posts')}
                                className='flex-1 flex  justify-center relative text-center text-secondary-700 cursor-pointer p-2 hover:bg-secondary-200 transition-all duration-300'>
                                Posts
                                {feedType === 'posts' && <div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary-800'></div>}
                            </div>
                            <div
                                onClick={() => setFeedType('likes')}
                                className='flex-1 relative flex  justify-center text-center text-secondary-700 cursor-pointer p-2 hover:bg-secondary-200 transition-all duration-300'>
                                Likes
                                {feedType === 'likes' && <div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary-800'></div>}
                            </div>
                        </div>
                        <Posts feedType={feedType} username={username} userId={user?._id} />
                    </div>
                    <Modal open={open} onClose={() => setOpen(false)} title='Update Profile'>
                        <ProfileUpdateForm authUser={authUser} onClose={() => setOpen(false)} />
                    </Modal>
                </>
            }


        </>
    )
}

export default Profile
