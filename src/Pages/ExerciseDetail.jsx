import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box } from '@mui/material';
import { fetchData, exerciseOptions, youTubeVideooptions,youtubeUrl } from '../Utils/FetchData';
import { Detail,SimilarExercises,ExerciseVideo } from '../Components';

const ExerciseDetail = () => {
  
  const { id } = useParams();
  const [exercisedetail, setExerciseDetail] = useState([]);
  const [exerciseVideo, setExerciseVideo] = useState([]);
  const [targetmusclevideo, setTargetMuscleVideo] = useState([]);
  const [ equipmentvideo, setEquipmentVideo] = useState([])

  useEffect( ()=>{

    const fetchexercisedetail = async ()=>{
       const exerciseURL = 'https://exercisedb.p.rapidapi.com/exercises/exercise';
       const exerciseURL2 = 'https://exercisedb.p.rapidapi.com/exercises';
       const exerciseVideoURL = 'https://youtube-search-and-download.p.rapidapi.com';
       
       const exerciseDetailData = await fetchData(`${exerciseURL}/${id}`,exerciseOptions);
       setExerciseDetail(exerciseDetailData);

       const exercisevideoData = await fetchData(`${exerciseVideoURL}/search?query=${exerciseDetailData.name}`, youTubeVideooptions);
         setExerciseVideo(exercisevideoData.contents); 


       const targetMuscleExerciseData = await fetchData(`${exerciseURL2}/target/${exerciseDetailData.target}`, exerciseOptions);
       setTargetMuscleVideo(targetMuscleExerciseData);

       
       const equipmentExerciseData = await fetchData(`${exerciseURL2}/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
       setEquipmentVideo(equipmentExerciseData);


    }

    fetchexercisedetail();

  },[id])



  return (
        <Box>
           <Detail exercisedetail = {exercisedetail} />
           <ExerciseVideo exerciseVideo={exerciseVideo} name={exercisedetail.name}/>
           <SimilarExercises targetMusleExercises={targetmusclevideo} equipmentExercises={equipmentvideo} />

        </Box>
  )
}

export default ExerciseDetail