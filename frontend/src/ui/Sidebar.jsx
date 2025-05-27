import React from 'react'
import XSvg from './X'
import { Link } from 'react-router-dom'
import { TiHome } from "react-icons/ti";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../hook/useLogout';
import useUser from './../hook/useUser'

function Sidebar() {
    const { logout } = useLogout();
    const { authUser: user } = useUser()

    return (
        <div className='sticky top-0 w-full flex flex-col h-[90vh] justify-between md:items-start '>
            <ul className='flex flex-col gap-y-6 items-center sm:items-start sm:gap-5'>
                <Link to='/'>
                    <XSvg className='lg:w-[20%] md:w-[30%] w-full fill-white mb-6' />
                </Link>
                <Link to='/'>
                    <li className='flex items-center gap-2'>
                        <TiHome className='icon-sideBar' />
                        <span className='hidden md:flex text-secondary-900'>Home</span>
                    </li>
                </Link>
                <Link to='/notification'>
                    <li className='flex items-center gap-2'>
                        <IoNotificationsSharp className='icon-sideBar' />
                        <span className='hidden md:flex text-secondary-900'>Notification</span>
                    </li>
                </Link>
                <Link to={`/profile/${user?.username}`}>
                    <li className='flex items-center gap-2'>
                        <FaUser className='icon-sideBar' />
                        <span className='hidden md:flex text-secondary-900'>Profile</span>
                    </li>
                </Link>
            </ul>
            <div className='grid md:grid-cols-[35px_1fr_25px] lg:grid-cols-[40px_1fr_30px] w-full  grid-cols-1 justify-center items-center md:justify-between'>
                <Link to={`profile/${user?.username}`} className='hidden md:flex rounded-full w-full h-full'>
                    <img src={user?.profileImg || '/avatar-placeholder.png'} alt="" className='hidden rounded-full object-cover w-full h-full sm:flex' />
                </Link>

                <Link to={`profile/${user?.username}`} className='text-center ml-2 md:flex flex-col hidden text-secondary-800'>
                    <h2 className='hidden font-extrabold text-[15px] sm:flex'>{user?.fullName}</h2>
                    <p className='text-sm text-secondary-500 hidden sm:flex'>@{user?.username}</p>
                </Link>
                <TbLogout2
                    className='text-secondary-800 w-7 h-7 md:w-5 md:h-5 cursor-pointer'
                    onClick={(e) => {
                        e.preventDefault();
                        logout();
                    }}
                />
            </div>
        </div>
    )
}

export default Sidebar
