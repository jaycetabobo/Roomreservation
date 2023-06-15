import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "../ui/css/Lobby.css";

export default function Navs() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 'room') {
      scrollToRoomImage();
    }
  };

  const scrollToRoomImage = () => {
    const roomImageElement = document.getElementById('roomImage');
    roomImageElement.scrollIntoView({ behavior: 'smooth' });
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
                width: '70%',
                height: '70%',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: '20px',
                marginLeft: '110px',
                backgroundColor: 'rgba(128, 128, 128, 0.5)',
              }}
              value={value}
              onChange={handleChange}
            >
              <BottomNavigationAction
                label="^"
                value="room"
                icon="Room & Suits"
                sx={{ color: 'white' }}
              />
            </BottomNavigation>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
            <BottomNavigation
              sx={{
                width: '50%',
                height: '70%',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: '20px',
                marginLeft: '75px',
                backgroundColor: 'rgba(128, 128, 128, 0.5)',
              }}
              value={value}
              onChange={handleChange}
              
            >
              <BottomNavigationAction
                label="^"
                value="news"
                icon="News"
                sx={{ color: 'white' }}
              />
            </BottomNavigation>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
            <BottomNavigation
              sx={{
                width: '50%',
                height: '70%',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: '20px',
                marginRight: '50px',
                backgroundColor: 'rgba(128, 128, 128, 0.5)',
              }}
              value={value}
              onChange={handleChange}
            >
              <BottomNavigationAction
                label="^"
                value="pages"
                icon="Pages"
                sx={{ color: 'white' }}
              />
            </BottomNavigation>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
