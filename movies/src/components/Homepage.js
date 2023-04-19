import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link,  } from 'react-router-dom'
import { getAllMovie } from '../Api-helpers/api-helpers'
import MovieItem from './Movies/MovieItem'

const Homepage = () => {
    const [movies, setmovies] = useState([]);
    useEffect(()=>{
 getAllMovie().then((data)=>setmovies(data.movies)).catch((err)=>console.log(err));
    },[])
    console.log(movies);
   return (
  <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
  <Box margin={"auto"} width="70%" height={"40vh"} padding={2}>
     <img src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/brahmastra-et00063710-1661162101.jpg' alt='Brahmastra' width={'100%'} height={'100%'}/>
  </Box>
 
 
 
 {/* Typhography for the text */}
 
  <Box padding={5} margin="auto">
     <Typography variant='h4' textAlign={"center"}>  
     Latest Realse
     </Typography>
  </Box>
 
 
 
  <Box display={"flex"} margin="auto" width="80%" justifyContent={"center"} flexWrap="wrap">
  {movies && movies.slice(0,4).map((item,index)=>
   <MovieItem id={item.id} title={item.title} posterUrl={item.posterUrl} releaseDate={item.releaseDate} key={index}/>
   )}
 
  </Box>
  <Box display="flex" padding={5} margin="auto">
  <Button LinkComponent={Link} to="/movies" variant='outlined' sx={{margin:"auto", color:"#2b2d42"}}> View All Movies </Button>
 
  </Box>
  </Box>
   )
 }
 
 export default Homepage