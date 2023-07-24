import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Loader from '../Loader/Loader';


const ExerciseVideo = ({ name, exerciseVideo}) => {

  console.log(exerciseVideo,name)
  return (
    <Box sx={{ marginTop:{ lg:'200px', xs:'20px'}}} p='20px'>
      <Typography variant='h4' mb='33px'>
        Watch <span style={{ color:'#ff2625', textTransform:'capitalize'}}> { name }</span> Exercise Videos
      </Typography>
      
      <Stack justifyContent='flex-start'  flexWrap='wrap' alignItems='center'
      sx={{ flexDirection:{lg:'row', gap:{ lg:'110px', xs:'0'}}}}>

              {
                exerciseVideo.length ? 
                 exerciseVideo.slice(0,3).map( (item, index) =>(
                      <a 
                        key={index}
                        className='exercise-video'
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target='_blank'
                        rel='nonreferrer'
                      >
                        <img  src={item.video.thumbnails[0].url} style={{marginRight:'10px' }} alt={item.video.title} />

                        <Box>
                          <Typography variant='h5' color='#000'>
                              { item.video.title}
                          </Typography>
                          <Typography variant='h6' color='#000'>
                              { item.video.channelName}
                          </Typography>
                        </Box>
                      </a>
                  ) )
                 :<Loader />

                
              }


      </Stack>


    </Box>
  )
}

export default ExerciseVideo