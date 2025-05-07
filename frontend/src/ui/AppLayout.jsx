import React from 'react'
import Sidebar from './Sidebar'
import RightPanel from './RightPanel'
import { Outlet } from 'react-router-dom'
function AppLayout() {
  return (
    <div className='container lg:max-w-screen-lg sm:px-10 lg:px-0  pt-8 pb-0 w-full flex  justify-between overflow-auto h-[97vh] overscroll-none scrollBar'>
      <Sidebar />
      <Outlet />
      <RightPanel />
    </div>
  )
}

export default AppLayout
