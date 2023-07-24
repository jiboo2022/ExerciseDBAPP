import React, {useState, UseEffect} from 'react';
import { Box } from '@mui/material';
import {SearchExercises, HeroBanner, Exercises} from '../Components'
 
const Home = () => {

  //const [info, setInfo] = useState('');
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')


  return (
    <Box>
      <HeroBanner />

      <SearchExercises  
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
        exercises={exercises} 
        setExercises={setExercises}
        isBodyParts
        
         />
      <Exercises  
     
       exercises={exercises}
       setExercises={setExercises}
       bodyPart={bodyPart}
        />

    </Box>
  )
}

export default Home