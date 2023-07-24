import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import HorizontalScrollBar from '../HorizontalScrollBar/HorizontalScrollBar';
import Loader from '../Loader/Loader';

const SimilarExercises = ({ targetMusleExercises,  equipmentExercises}) => {

   console.log(targetMusleExercises, equipmentExercises)
  return (
    
    <Box sx={{mt:{lg:'100px', xs:'0'}}}>
     <Typography variant='h4' sx={{ mb:{ lg:'40px', xs:'5px'}}}> Exercises that target the musle group</Typography>
     
     <Stack direction='row' sx={{ p:'2', position:'relative'}}>
        {
          targetMusleExercises.length ? <HorizontalScrollBar data={targetMusleExercises} />:<Loader />
        }
     </Stack>

     <Typography variant='h4' sx={{ mb:{ lg:'40px', xs:'5px'},mt:{ lg:'100px', xs:'5px'}}}> Exercises that use the same equipmentExercises</Typography>
     
     <Stack direction='row' sx={{ p:'2', position:'relative'}}>
        {
          equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} />:<Loader />
        }
     </Stack>



    </Box>
  )
}

export default SimilarExercises