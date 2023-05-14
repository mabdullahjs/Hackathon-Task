// import { Typography } from '@mui/material'
import React from 'react'
import MAAppbar from '../../config/AppComponent/MAAppbar'
import { Route, Routes } from 'react-router-dom'
import Main from './MainScreen/Main'
import CarDetail from './CarDetailScreen/CarDetail'
import BookNow from './BookNowScreen/BookNow'

const Home = () => {
  return (
    <>
    <MAAppbar/>

    <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/detail' element={<CarDetail/>} />
        <Route path='/booknow' element={<BookNow/>} />
      </Routes>
    </>
  )
}

export default Home