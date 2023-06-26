import React, { useEffect, useState, useContext } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../ui/css/DropdownAvatar.css';
import { Navigate, useNavigate } from 'react-router-dom';
import '../ui/css/Lobby.css';
import { auth } from "../lib/firebase";
import { Avatar } from "@mui/material";
import { AuthContext } from '../context/AuthContext';
import { signOut } from "firebase/auth";

export default function Navs() {
  const [value, setValue] = useState('recents');
  const [hideNav, setHideNav] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await auth.signOut().then(() => navigate("/"));
  };


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

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const shouldHideNav = prevScrollPos < currentScrollPos;
      setHideNav(shouldHideNav);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={hideNav ? { display: 'none' } : {}} className='navs'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
            {/* Content */}
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
            <img 
            src="/hotel-logo.svg" 
            alt="logo"
            style={{ width: '80px' }}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
            {/* Content */}
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
            {/* Content */}
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
            <BottomNavigation
              sx={{
                width: '70%',
                height: '50%',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: '20px',
                marginLeft: '10px',
                backgroundColor: 'rgba(128, 128, 128, 0.5)',
              }}
              value={value}
              onChange={handleChange}
              onClick={() => navigate("/lobby")}
            >
              <BottomNavigationAction
                label="^"
                value="room"
                icon="Room & Suits"
                sx={{ color: 'white' }}
                
              />
            </BottomNavigation>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
          <div className="dropdown">
       <Avatar
          src={currentUser?.photoURL}
          sx={{ width: 35, height: 35 }}
          onClick={toggleDropdown}
        />
      {isOpen && (
        <div className="dropdown-content">
          <button onClick={'/book-history'} style={{border:'none'}}>My Profile</button>
          <button onClick={handleLogout} style={{border:'none'}}>
            Logout
          </button>
        </div>
      )}
    </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
