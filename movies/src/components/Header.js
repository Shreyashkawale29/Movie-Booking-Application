import React,
{ useEffect,
useState } from 'react'
import {
  AppBar,
  Autocomplete,
  Box,
  Tab,
  Tabs,
  TextField,
  Toolbar
} from '@mui/material'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { getAllMovie } from '../Api-helpers/api-helpers';
import { Link } from 'react-router-dom';
const Header = () => {
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getAllMovie()
      .then((data) => console.log(data.movies))
      .catch((err) => console.log(err));
   }, []);
  

  return (
    <AppBar position='sticky' sx={{bgcolor: "#2b2d42"}}>
      <Toolbar>
        <Box width={'20%'}>
          < TheaterComedyIcon />
        </Box>
        <Box width={'30%'} margin={"auto"}>
          <Autocomplete
            freeSolo
            options={movies && movies.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
            sx={{input:  {color: "white"}}}
                variant='standard' {...params} placeholder="Search Multiple Movies Across" />
            )}
          />
        </Box>
        <Box display={'flex'}>
          <Tabs textColor='white' indicatorColor='secondary' value={value}
          onChange={(e,val)=>setValue(val)}
          >
          <Tab LinkComponent={Link} to="/movies" label="Movies" />
            <Tab LinkComponent={Link} to="/auth" label="Auth" />
            <Tab LinkComponent={Link} to="/admin"  label="Admin"/>

          </Tabs>
          
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header