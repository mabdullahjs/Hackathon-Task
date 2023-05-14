import { Box, Typography } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import MAButton from '../../../config/components/MAButton';

function CarDetail() {
  //locator function
  const location = useLocation()
  console.log(location.state);
  const data = location.state

  //navigate
  const navigate = useNavigate()
  //bookNow function
  const bookNow = ()=>{
    navigate('/home/booknow');
  }
  return (
    <Box className='mb-5'>
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
      <Box className='mt-3 d-flex justify-content-center'>
        <MAButton label='BookNow' onClick={bookNow}/>
      </Box>
    </Box>
  )
}

export default CarDetail