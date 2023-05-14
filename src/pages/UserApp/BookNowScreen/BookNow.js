import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import MADatePicker from '../../../config/components/MADataPicker';
import MAInput from '../../../config/components/MAInput';
import MAButton from '../../../config/components/MAButton';

function BookNow() {
  //locator function
  const location = useLocation()
  console.log(location.state);
  const data = location.state

  

  //state
  const [startingLocation, setStartingLocation] = useState('');
  const [endingLocation, setEndingLocation] = useState('');
  const [policy, setPolicy] = useState('');
  const [date, setDate] = useState('');
  const [stime, setStime] = useState('');
  const [etime, setEtime] = useState('');

  //bookFunc
  const bookFunc = ()=>{
    console.log(startingLocation , endingLocation , policy , date , stime , etime);
  }
  return (
    <Box className='d-flex justify-content-evenly container mb-5 flex-wrap'>
      <Box className='mt-5 w-50'>
        <Box className='text-center mt-4'>
          <img className='w-50 img-fluid' src={data.image} alt="img" />
        </Box>
        <Box className='container mt-5'>
          <Typography variant='h5'>DETAIL:</Typography>
          <Typography className='mt-3'>{data.detail}</Typography>
        </Box>
      </Box>
      <Box>

        <Box className='mt-5 text-center w-50'>
          <Typography variant='h4'>Checkout</Typography>
          <Box>
            <MAInput className="mb-3 mt-3" label="Starting Location" type="text" variant="outlined" width="17rem" onChange={(e) => setStartingLocation(e.target.value)} value={startingLocation} /><br />
            <MAInput className="mb-3 mt-3" label="Ending Location" type="text" variant="outlined" width="17rem" onChange={(e) => setEndingLocation(e.target.value)} value={endingLocation} /><br />
            <MAInput className="mb-3 mt-3" label="Policy" type="text" variant="outlined" width="17rem" onChange={(e) => setPolicy(e.target.value)} value={policy} /><br />
            <Box className='mb-3 mt-3'>
              <MADatePicker width='17rem' label='Starting Date' onChange={(e)=>setDate(e)} value={date}/>
            </Box>
            <MAInput className="mb-3 mt-3" label="Start time" type="text" variant="outlined" width="17rem" onChange={(e) => setStime(e.target.value)} value={stime} /><br />
            <MAInput className="mb-3 mt-3" label="End time" type="text" variant="outlined" width="17rem" onChange={(e) => setEtime(e.target.value)} value={etime} />
            <Box className='mt-2 d-flex justify-content-center'>
              <MAButton onClick={bookFunc} label='Book' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BookNow