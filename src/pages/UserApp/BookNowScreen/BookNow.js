import { Box, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom'

function BookNow() {
  //locator function
  const location = useLocation()
  console.log(location.state);
  const data = location.state
  return (
    <Box className='d-flex justify-content-between container mb-5'>
      <Box>
      <Box className='text-center mt-4'>
        <img className='w-50 img-fluid' src={data.image} alt="img" />
      </Box>
      <Box className='container mt-5'>
        <Typography variant='h5'>DETAIL:</Typography>
        <Typography className='mt-3'>{data.detail}</Typography>
      </Box>
      <Box className='container mt-5 '>
        <Typography variant='h5'>FEATURE:</Typography>
        <Typography className='mt-3'>
          AC,
          GPS,
          Bluetooth,
          USB Port,
        </Typography>
      </Box>
      <Box className='container mt-5 '>
        <Typography variant='h5'>REVIEWS:</Typography>
        <Typography className='mt-3'>
          Name:Abdullah, <br />
          stars: 5, <br />
          Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quaerat mollitia sunt reprehenderit dolore nostrum nemo cumque rem quod odit similique, error fugiat, perferendis autem doloribus veritatis vitae iste dolorem!
        </Typography>
      </Box>
      <Box className='container mt-5 '>
        <Typography variant='h5'>Availability:</Typography>
        <Typography className='mt-3'>Available</Typography>
      </Box>
      </Box>
      <Box>
      <Box className='text-center mt-4'>
        <img className='w-50 img-fluid' src={data.image} alt="img" />
      </Box>
      <Box className='container mt-5'>
        <Typography variant='h5'>DETAIL:</Typography>
        <Typography className='mt-3'>{data.detail}</Typography>
      </Box>
      <Box className='container mt-5 '>
        <Typography variant='h5'>FEATURE:</Typography>
        <Typography className='mt-3'>
          AC,
          GPS,
          Bluetooth,
          USB Port,
        </Typography>
      </Box>
      <Box className='container mt-5 '>
        <Typography variant='h5'>REVIEWS:</Typography>
        <Typography className='mt-3'>
          Name:Abdullah, <br />
          stars: 5, <br />
          Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quaerat mollitia sunt reprehenderit dolore nostrum nemo cumque rem quod odit similique, error fugiat, perferendis autem doloribus veritatis vitae iste dolorem!
        </Typography>
      </Box>
      <Box className='container mt-5 '>
        <Typography variant='h5'>Availability:</Typography>
        <Typography className='mt-3'>Available</Typography>
      </Box>
      </Box>
    </Box>
  )
}

export default BookNow