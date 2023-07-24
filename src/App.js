import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Box , Typography,} from '@mui/material';
import {  NavBar } from './Components';
import './App.css';
import {ExerciseDetail,Home, Footer} from './Components'


const App = () => {
  return (

    <BrowserRouter>  
    <Box width='400px' sx={{ width:{ xl:'1488px' }}} margin='auto'>
    <NavBar />
      <Routes>
        <Route  path='/' exact element={< Home/>}/>
        <Route  path='/exercise/:id'  element={< ExerciseDetail/>}/>
      </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  
  )
}

export default App