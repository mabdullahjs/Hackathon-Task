import React from 'react'
import MACards from '../../../config/AppComponent/MACards'
import { Box, Grid, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

function Main() {


    //react router navigate
    const navigate = useNavigate();

    //book Now Function
    const bookNow = () => {
        navigate('/home/booknow', {
            state: {
                image: 'https://static.pakwheels.com/2021/11/Suzuki-Wagon-R-Owners-Review-1.jpg',
                title: 'wagnor',
                detail: 'Suzuki Wagon R Price in Pakistan, Images, Reviews & Specs | PakWheels',
                description: 'The Maruti Wagon R has 2 Petrol Engine and 1 CNG Engine on offer. The Petrol engine is 998 cc and 1197 cc while the CNG engine is 998 cc . It is available with Manual & Automatic transmission.Depending upon the variant and fuel type the Wagon R has a mileage of 23.56 kmpl to 34.05 km/kg . The Wagon R is a 5 seater 4 cylinder car and has length of 3655mm, width of 1620mm and a wheelbase of 2435.'
            }
        })
    }

    //cardetail function
    const carDetail = () => {
        navigate('/home/detail', {
            state: {
                image: 'https://static.pakwheels.com/2021/11/Suzuki-Wagon-R-Owners-Review-1.jpg',
                title: 'wagnor',
                detail: 'Suzuki Wagon R Price in Pakistan, Images, Reviews & Specs | PakWheels',
                description: 'The Maruti Wagon R has 2 Petrol Engine and 1 CNG Engine on offer. The Petrol engine is 998 cc and 1197 cc while the CNG engine is 998 cc . It is available with Manual & Automatic transmission.Depending upon the variant and fuel type the Wagon R has a mileage of 23.56 kmpl to 34.05 km/kg . The Wagon R is a 5 seater 4 cylinder car and has length of 3655mm, width of 1620mm and a wheelbase of 2435.'
            }
        })
    }
    return (
        <Box className='mt-5 container'>
            <Box className='m-3'>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
                        label="Amount"
                    />
                </FormControl>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={8} sm={6} md={3}>
                    <MACards image='https://static.pakwheels.com/2021/11/Suzuki-Wagon-R-Owners-Review-1.jpg' title='Wagnor' detail='Suzuki Wagon R Price in Pakistan, Images, Reviews & Specs | PakWheels' onClick={bookNow} onClickTitle={carDetail} />
                </Grid>
                <Grid item xs={8} sm={6} md={3}>
                    <MACards image='https://static.pakwheels.com/2021/11/Suzuki-Wagon-R-Owners-Review-1.jpg' title='Wagnor' detail='Suzuki Wagon R Price in Pakistan, Images, Reviews & Specs | PakWheels' onClick={bookNow} onClickTitle={carDetail} />
                </Grid>
                <Grid item xs={8} sm={6} md={3}>
                    <MACards image='https://static.pakwheels.com/2021/11/Suzuki-Wagon-R-Owners-Review-1.jpg' title='Wagnor' detail='Suzuki Wagon R Price in Pakistan, Images, Reviews & Specs | PakWheels' onClick={bookNow} onClickTitle={carDetail} />
                </Grid>
                <Grid item xs={8} sm={6} md={3}>
                    <MACards image='https://static.pakwheels.com/2021/11/Suzuki-Wagon-R-Owners-Review-1.jpg' title='Wagnor' detail='Suzuki Wagon R Price in Pakistan, Images, Reviews & Specs | PakWheels' onClick={bookNow} onClickTitle={carDetail} />
                </Grid>
                <Grid item xs={8} sm={6} md={3}>
                    <MACards image='https://static.pakwheels.com/2021/11/Suzuki-Wagon-R-Owners-Review-1.jpg' title='Wagnor' detail='Suzuki Wagon R Price in Pakistan, Images, Reviews & Specs | PakWheels' onClick={bookNow} onClickTitle={carDetail} />
                </Grid>
                <Grid item xs={8} sm={6} md={3}>
                    <MACards image='https://static.pakwheels.com/2021/11/Suzuki-Wagon-R-Owners-Review-1.jpg' title='Wagnor' detail='Suzuki Wagon R Price in Pakistan, Images, Reviews & Specs | PakWheels' onClick={bookNow} onClickTitle={carDetail} />
                </Grid>
                <Grid item xs={8} sm={6} md={3}>
                    <MACards image='https://static.pakwheels.com/2021/11/Suzuki-Wagon-R-Owners-Review-1.jpg' title='Wagnor' detail='Suzuki Wagon R Price in Pakistan, Images, Reviews & Specs | PakWheels' onClick={bookNow} onClickTitle={carDetail} />
                </Grid>
                <Grid item xs={8} sm={6} md={3}>
                    <MACards image='https://static.pakwheels.com/2021/11/Suzuki-Wagon-R-Owners-Review-1.jpg' title='Wagnor' detail='Suzuki Wagon R Price in Pakistan, Images, Reviews & Specs | PakWheels' onClick={bookNow} onClickTitle={carDetail} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Main