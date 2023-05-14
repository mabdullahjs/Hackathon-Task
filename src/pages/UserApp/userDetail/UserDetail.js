import React, { useEffect, useState } from 'react'
// import { auth } from '../../../config/Firebase/firebaseMethod'
import { Box, Typography } from '@mui/material';
import { getData } from '../../../config/Firebase/firebaseMethod';

function UserDetail() {
    const [data, setData] = useState(null);
    useEffect(() => {
        getData('users')
            .then((res) => {
                setData(res);
            })

    }, [])
    return (
        <>
            {data ? <Box className='mt-5 text-center'>
                <Typography>Name:{data[0].userName}</Typography>
            </Box> : <h1>Loading...</h1>}
        </>
    )
}

export default UserDetail