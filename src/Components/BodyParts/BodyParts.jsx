import React from 'react';
import { Stack, Typography, typography } from '@mui/material';
import Icon from '../../assets/icons/gym.png'

const BodyParts = ({item, bodyPart, setBodyPart}) => {

    // console.log('see body parts',item,bodyPart)
  return (
   
    <Stack
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={{
        
        borderTop: bodyPart === item ? '4px solid #ff2625': '',
        backgroundColor:'#fff',
        borderBottomLeftRadius:'20px',
        width:'270px',
        height:'280px',
        cursor:'pointer',
        gap:'27px',


    }}

    onClick={ ()=>{

      setBodyPart(item);
      window.scrollTo({ Top:1800, left:100, behavior:'smooth'}) ;

      // console.log(bodyParts);

      }}

      >
      <img src={Icon} alt='dumbell' style={{ width:'40px', height:'40px'}} />
      
      <Typography fontSize='24px' fontWeight='bold' color='#3a1212' textTransform='capitalize'>
          {item }
      </Typography>

    </Stack>
  )
}

export default BodyParts