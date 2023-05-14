// import { Typography } from '@mui/material'
import React from 'react'
import MAAppbar from '../../config/AppComponent/MAAppbar'
import { Route, Routes } from 'react-router-dom'
import Main from './MainScreen/Main'

const Home = () => {
  return (
    <>
    <MAAppbar/>

    <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/head1' element={<h1>Head02</h1>} />
        <Route path='/head2' element={<h1>Head03</h1>} />
      </Routes>
    </>
  )
}

export default Home