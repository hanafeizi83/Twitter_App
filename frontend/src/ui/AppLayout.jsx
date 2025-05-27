import React from 'react'
import Sidebar from './Sidebar'
import RightPanel from './RightPanel'
import { Outlet } from 'react-router-dom'
function AppLayout() {
  return (
    <div className='lg:max-w-screen-lg grid pt-5 !w-full grid-cols-[3rem_1fr] md:grid-cols-[13rem_1fr] lg:grid-cols-[13rem_1fr_16rem] container'>
      <Sidebar />
      <Outlet />
      <RightPanel />
    </div>
  )
}

export default AppLayout
