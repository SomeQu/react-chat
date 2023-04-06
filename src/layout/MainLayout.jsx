import React from 'react'
import BackgroundAnimation from '../components/BackgroundAnimation'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
    <BackgroundAnimation/>
    <Outlet/>
    </div>
  )
}

export default MainLayout