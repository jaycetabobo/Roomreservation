import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "../ui/css/Lobby.css";

export default function Navs() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='navs'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>  
              <img src="/hotel-logo.svg" alt="logo" />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
            
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
            <BottomNavigation
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
              value={value}
              onChange={handleChange}
            >
              <BottomNavigationAction
                label="Favorites"
                value="favorites"
               
              />
            </BottomNavigation>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
            <BottomNavigation
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
              value={value}
              onChange={handleChange}
            >
              <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={<LocationOnIcon />}
              />
            </BottomNavigation>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
            <BottomNavigation
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
              value={value}
              onChange={handleChange}
            >
              <BottomNavigationAction
                label="Folder"
                value="folder"
                icon={<FolderIcon />}
              />
            </BottomNavigation>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
