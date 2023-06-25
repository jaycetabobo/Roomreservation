import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../ui/css/Slider.css';
import { EffectCards } from 'swiper';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

const VerticalSlider = () => {
  const [showSlider, setShowSlider] = useState(true);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const querySnapshot = await getDocs(collection(db, 'room'));
      const roomURLs = querySnapshot.docs.map((doc) => doc.data().roomURL);
      setRooms(roomURLs);
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200; // Adjust this value to change when the slider appears

      if (scrollPosition > threshold) {
        setShowSlider(false);
      } else {
        setShowSlider(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`slider ${showSlider ? 'show' : ''}`}>
      <Swiper effect="cards" grabCursor={true} modules={[EffectCards]} className="mySwiper">
        {rooms.map((roomURL, index) => (
          <SwiperSlide key={index}>
            <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <img src={roomURL} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VerticalSlider;
