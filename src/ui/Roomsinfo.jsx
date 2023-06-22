import React, { useEffect, useRef } from 'react';
import { Container, Card, Typography, List, ListItem, Button, Grid } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  title: {
    marginBottom: '20px',
    fontWeight: 'bold',
    fontSize: '24px',
    color: 'green'
  },
  card: {
    width: '100%',
    marginBottom: '20px',
    padding: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  listItem: {
    marginBottom: '10px',
  },
  button: {
    width: '100px',
    backgroundColor: 'green',
    color: '#fff',
    borderRadius: '4px',
    padding: '8px',
    fontWeight: 'bold',
    fontSize: '14px',
    textTransform: 'uppercase',
    margin: '0 auto',
  },
};

const Roomsinfo = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = ['/roomsimg/business1.jpg', '/roomsimg/business2.jpg', '/roomsimg/business3.jpg'];

  const description = 'Experience the epitome of business sophistication at the Ritz Hotels Business Executive Room. This thoughtfully designed space caters to the needs of discerning professionals, combining efficiency with luxurious comfort. Unwind in the serene ambiance of a king-sized bed adorned with plush linens, offering a peaceful retreat from the demands of the business world. The room features a spacious work desk equipped with essential amenities and high-speed Wi-Fi for seamless connectivity. Take advantage of the en-suite bathroom, boasting modern fixtures and premium toiletries, providing convenience and indulgence. Whether you need a space for focused work or moments of relaxation, the Business Executive Room offers a perfect balance. Our attentive staff is dedicated to providing exceptional service, ensuring your stay is both productive and pleasurable at the Ritz Hotels Business Executive Room.';

  const words = ['Individually controlled AC', 'Private bathroom', 'Private sauna', 'Cable TV', 'Mini bar', 'Coffee and Tea making facilities'];

  return (
    <Container maxWidth="md" style={styles.container}>
      <Card style={styles.card}>
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index}>
                <img src={image} alt={`Image ${index}`} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }} />
            </div>
          ))}
        </Slider>
      </Card>

      <Typography variant="h2" style={styles.title}>
        Business Executive Room
      </Typography>

      <Card style={{ ...styles.card, height: 'fit-content' }}>
        <Typography variant="body1" style={styles.description}>
          {description}
        </Typography>
      </Card>

      <Typography variant="h2" style={styles.title}>
        AMENITIES
      </Typography>

      <Card style={{ ...styles.card, display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={2}>
          {words.map((word, index) => (
            <Grid item xs={4} key={index}>
              <Typography variant="body1" style={{display: 'flex', justifyContent: 'center'}}>{word}</Typography>
            </Grid>
          ))}
        </Grid>
      </Card>

      <Button variant="contained" color="primary" style={{ ...styles.button, width: '100px', borderRadius: '20px' }}>
        Reserve
      </Button>
    </Container>
  );
};

export default Roomsinfo;
