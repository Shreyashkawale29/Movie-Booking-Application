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
import { useDispatch, useSelector } from 'react-redux';
import { adminActions, userActions } from '../store';
const Header = () => {
  const dispatch =useDispatch()
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getAllMovie()
      .then((data) => console.log(data.movies))
      .catch((err) => console.log(err));
   }, []);
  
  const logout = (isAdmin) => { 
    dispatch(isAdmin?adminActions.logout():userActions.logout());
  }

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
            {!isAdminLoggedIn && !isUserLoggedIn && (<>
              <Tab LinkComponent={Link} to="/auth" label="Auth" />
            <Tab LinkComponent={Link} to="/admin"  label="Admin"/>
            
            </>
            )}
            {isUserLoggedIn && (
              <>
            <Tab LinkComponent={Link} to="/profile" label="Profile" />
            <Tab onClick={()=>logout(false)} LinkComponent={Link} to="/"  label="Logout"/>
              </>
            )}
            {isAdminLoggedIn && (
              <>
            <Tab LinkComponent={Link} to="/add" label="Add Movie" />
                <Tab LinkComponent={Link} to="/admin" label="Profile" />
                <Tab onClick={()=>logout(true)} LinkComponent={Link} to="/"  label="Logout"/>

              </>
            )}
            

          </Tabs>
          
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header