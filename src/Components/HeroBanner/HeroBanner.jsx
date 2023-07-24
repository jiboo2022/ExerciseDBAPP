import React from 'react';
import {Box,Typography,Stack,Button} from '@mui/material';
import { Link } from 'react-router-dom';
import HeroBannerImage  from '../../assets/images/banner.png'

const Herobanner = () => {
  return (
    <Box sx={{ mt:{ lg:'212px', xs:'70px'},ml:{ sm:'50px'}}} position='relative' p='20px'>
        <Typography color='#ff2625' fontWeight='600' fontSize='26px'>
            Fitness Club
        </Typography>

        <Typography fontWeight={700} sx={{ fontSize:{ lg:'44px', xs:'40px'}}} mb='23px' mt='30px'>
            Sweat, Smile  <br /> And Repeat
        </Typography>

        <Typography  fontSize='19px' lineHeight='35px'  mb={3}>
            Check out the most effective exercises
        </Typography>

        <Button variant='contained' color='error' href='#exercises'mb={4} sx={{ backgroundColor:'#ff2625', padding:'10px'}}>
            Explore Exercises
        </Button>

        <Typography fontWeight={600} color='ff2625' fontSize='200px' sx={{ opacity:0.1, display:{lg:'block', xs:'none'}}}>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
        
    </Box>
  )
}

export default Herobanner