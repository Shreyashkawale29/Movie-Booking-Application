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


const dummyArray = ["pathan", "slefiee", "Brahmastra", "chal jindiye"]
const Header = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    getAllMovie()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
   }, []);
  

  return (
    <AppBar sx={{bgcolor: "#2b2d42"}}>
      <Toolbar>
        <Box width={'20%'}>
          < TheaterComedyIcon />
        </Box>
        <Box width={'30%'} margin={"auto"}>
          <Autocomplete
            freeSolo
            options={dummyArray.map((option) => option)}
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
          <Tab label="Movies" />
            <Tab label="Auth" />
            <Tab label="Admin"/>

          </Tabs>
          
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header