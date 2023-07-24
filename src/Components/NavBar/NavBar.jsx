import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../../assets/images/Logo.png' ;

const NavBar = () => {
  return (
    <Stack direction='row' justifyContent='space-around'
     sx={{ gap:{ sm:'122px', xs:'40px'}, mt:{ sm:'32px', xs:'20px'}, justifyContent:'none'}}
     px='20px'
     >

        <Link t0='/'>
        <img src={Logo}
          alt='logo'
          style={{ width:'48px', height:'48px', margin:'0 2px'}}
        />
        </Link>

        <Stack direction='row' gap='40px' fontSize='34px' alignItems='flex-end' >
            <Link to='/' style={{ textDecoration:'none', borderBottom:'3px solid #ff2625' }}>
              Home
            </Link>
            <a href='/' style={{ textDecoration:'none', color:'#3a1212' }}>
              Exercices
            </a>
        </Stack>
    </Stack>
  )
}

export default NavBar