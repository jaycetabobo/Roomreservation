import React from 'react'
import ImgBackground from '../../ui/ImgBackground'
import Navs from '../../ui/Navs'
import TextCard from '../../ui/TextCard'
import VerticalSlider from '../../ui/VerticalSlider'
import RoomSearch from '../../ui/RoomSearch'
import RoomImage from '../../ui/RoomImage'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import "../css/Lobby.css"

export default function Lobby() {
  return (
    <>
      <Navs />
      <TextCard />
      <ImgBackground />
      <VerticalSlider />
      <RoomSearch />
      <div className='lobbycss' id='roomImage'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container sx={{justifyContent: 'space-evenly'}}>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5} xxl={5} className='list'>  
            <RoomImage 
            image="/img/room1.jpg"
            name="De Luxe Room"
            description="2 adults | 1 child below 7"
            price="99900"
            />
          </Grid>
          

        </Grid>
      </Box>
      </div>
    </>
  )
}
