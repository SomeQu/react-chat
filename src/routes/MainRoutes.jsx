import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import MainLayout from '../layout/MainLayout'
import MainPage from '../pages/MainPage'


const MainRoutes = () => {
  return (
    <Routes>

        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='/main' element={<MainPage/>} />
    </Routes>
  )
}

export default MainRoutes