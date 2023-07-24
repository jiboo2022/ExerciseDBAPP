import React,{useState, useEffect} from 'react';
import {Box, Typography, Stack} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import {ExerciseCard } from '../../Components';
import Loader from '../Loader/Loader';
import { exerciseOptions, fetchData , SiteUrl, categoryUrl} from '../../Utils/FetchData';



const Exercises = ({ exercises, setExercises, bodyPart}) => {

  console.log(bodyPart);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

  const lastindex = currentPage * exercisesPerPage;
  const fistindex = lastindex - exercisesPerPage; 

  const currentexercises = exercises.slice(fistindex, lastindex);

  const paginate = ( e, value) =>{

    setCurrentPage(value);
    window.scrollTo( {top:1800 , behavior:'smooth'})
    console.log(currentPage);
  }
  
      useEffect(()=>{

        const fetchExercisesData = async ()=>{

          let exercisedata = [];

          if (bodyPart === 'all'){

            exercisedata = await fetchData(SiteUrl,exerciseOptions)
          }
          else{

            exercisedata = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)

          }

          setExercises(exercisedata);

          

        }

        fetchExercisesData();
        
      },[bodyPart])


      
  
      return (
        <Box id='exercises'
        sx={{ mt:{lg:'110px'}}}
        mt='50px'
        p='20px'
        >
          <Typography variant='h3' mb='48px'>
            Showing Results
          </Typography>
          
          <Stack direction='row' sx={{ gap:{ lg:'110px', xs:'50px'}}} flexWrap='wrap' justifyContent='center' >
           
           { currentexercises.length ? ( currentexercises.map( ( exercise, index)=>(
            
             <ExerciseCard  key ={index} exercise={exercise}  />)))

           :(<Loader /> )

           }

          </Stack>
           <Stack mt='110px' alignItems='center'>
             {
              exercises.length > 6 && (
                <Pagination 
                  color='standard'
                  shape='rounded'
                  defaultPage={1}
                  count={ Math.ceil(exercises.length/exercisesPerPage)}
                  page={currentPage}
                  onChange={paginate}
                  size='large'



                />

              )
             }
           </Stack>
        </Box>
      )
}

export default Exercises