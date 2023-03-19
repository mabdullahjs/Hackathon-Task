import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'
import Home from '../../pages/Home'
import ProtectedRoutes from './ProtectedRoutes'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoutes component={<Login/>} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router