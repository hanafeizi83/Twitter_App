import React from 'react'
import XSvg from './X'
import { Link } from 'react-router-dom'
import { TiHome } from "react-icons/ti";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { USERS_FOR_RIGHT_PANEL } from './../utils/db/dummy'
import useLogout from '../hook/useLogout';

function Sidebar() {
    const { logout } = useLogout();
    const user = USERS_FOR_RIGHT_PANEL[0];
    return (
        <div className='sticky top-0 md:w-[25%] lg:w-[20%] sm:w-[10%] flex flex-col h-[90vh] justify-between sm:items-center md:items-start '>
            <ul className='flex flex-col gap-5'>
                <Link to='/'>
                    <XSvg className='lg:w-[20%] md:w-[30%] sm:w-[80%] fill-white mb-6' />
                </Link>
                <Link to='/'>
                    <li className='flex items-center md:gap-2'>
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
                <Link to='/profile/hana'>
                    <li className='flex items-center gap-2'>
                        <FaUser className='icon-sideBar' />
                        <span className='hidden md:flex text-secondary-900'>Profile</span>
                    </li>
                </Link>
            </ul>
            <div className='grid grid-cols-[50px_1fr_30px] w-full  grid-rows-1 items-center justify-between'>
                <Link to={`profile/${user?.username}`} className='hidden md:flex '>
                    <img src={user?.profileImg || '/avatar-placeholder.png'} alt="" className='hidden rounded-full md:flex' />
                </Link>

                <Link to={`profile/${user?.username}`} className='text-center ml-2 md:flex flex-col hidden text-secondary-800'>
                    <h2 className='font-extrabold text-lg hidden md:flex'>{user?.fullName}</h2>
                    <p className='text-sm text-secondary-500 hidden md:flex'>@{user?.username}</p>
                </Link>
                <TbLogout2
                    className='text-secondary-800 w-7 h-7 md:w-5 md:h-5 cursor-pointer'
                    onClick={() => logout()}
                />
            </div>
        </div>
    )
}

export default Sidebar
