import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../ui/css/Lobby.css";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


export default function TextCard() {
  const [showTextcard, setShowTextcard] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200; // Adjust this value to change when the slider appears

      if (scrollPosition > threshold) {
        setShowTextcard(false);
      } else {
        setShowTextcard(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <div className={`textcard ${showTextcard ? 'show' : ''}`} style={{boxShadow: '8px 8px 2px 1px rgba(128, 128, 128, .2)', borderRadius:'20px'}}>
    <Card sx={{ maxWidth: 350, borderRadius:'20px', backgroundColor: 'rgba(128, 128, 128, 0.5)' }}>
      <CardHeader
      />
        <Stack spacing={1} sx={{marginLeft: '15px'}}>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        </Stack>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{display: 'flex',justifyContent: 'center' , color: 'white', fontSize: '40px'}}>
          The Ritz Hotel
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color: 'white', paddingLeft: '10px', paddingRight: '10px'}}>
        &nbsp; &nbsp; When dreaming of Paris — of its centuries of history resulting in grand institutions, paeans to art, instantly identifiable architecture and sublime food — few modern-day edifices tie itself to the city as closely as the legendary Ritz Paris, opened by Cesar Ritz in 1898. 
        </Typography>
      </CardContent>
      <CardContent sx={{display: 'flex', justifyContent: 'center'}}>
        <Button variant="outlined" sx={{color: 'white', borderColor: 'white', borderRadius: '10px'}}>More Info</Button>
      </CardContent>
    </Card>
    </div>
  );
}