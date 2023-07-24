import React,{useEffect, useState} from 'react';
import {Box,Typography,Stack, Button, TextField} from '@mui/material';
import { exerciseOptions, fetchData , SiteUrl, categoryUrl} from '../../Utils/FetchData';
import { HorizontalScrollBar } from '../../Components';




const SearchExercises = ({ bodyPart,setBodyPart, exercises, setExercises}) => {

    const [info, setInfo] = useState('');
  //const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([])



  useEffect(() => {
    
       const fetchExeciseData = async ()=>{
      
         const bodyPartData = await fetchData(categoryUrl,exerciseOptions);

            setBodyParts([ 'all', ...bodyPartData]);

       }
       fetchExeciseData();
    
  }, [])
  


  const find = async ()=>{
    
    if(info){

      const exerciseData = await fetchData (SiteUrl, exerciseOptions);
      console.log(info, exerciseData);

      const  searchedExercises = exerciseData.filter( 
         (exercise)=>exercise.name.toLowerCase().includes(info) ||
          exercise.target.toLowerCase().includes(info) ||
          exercise.equipment.toLowerCase().includes(info) ||
          exercise.bodyPart.toLowerCase().includes(info) 
      );
      setInfo('');
      setExercises(searchedExercises);
    }
      else {return 'Loading......';}
    
    
  }

  return (
    <Stack alignItems='center' justifyContent='center' mt='230px' p='20px'>
      <Typography fontWeight={700} sx={{fontSize:{ lg:'44px', xs:'30px'}}}>
        Awesome Exercises You <br/> Should Know
      </Typography>

      <Box position='relative' mb='72px'>

        <TextField 
        sx={{
          input:{ fontWeight:'700',border:'none',borderRadius:'4px'},
          width:{ lg:'1000px', xs:'350px' },
          backgroundColor:'$fff',
          borderRadius:'40px'
        }}
        
        height='76px' 
        value={info}
        onChange={ (e)=>setInfo(e.target.value.toLocaleLowerCase()) }
        type='text'
        placeholder='Search Exercises....'
        
        >

        </TextField>

        <Button 
        className='search-btn' 
        sx={{ backgroundColor:'#ff2625', color:'#fff', height:'56px', textTransform:'none',
       width:{lg:'175px', xs:'80px'}, fontSize:{lg:'20px', xs:'14px'}, position:'absolute', right:0 }}
        
        onClick={find}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position:'relative',p:'20px', width:'100%' }}>
       
        <HorizontalScrollBar  data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>

    </Stack>
  )
}

export default SearchExercises