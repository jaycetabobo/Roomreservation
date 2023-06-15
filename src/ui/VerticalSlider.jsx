import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../ui/css/Slider.css';

import { EffectCards } from 'swiper';

const VerticalSlider = () => {
  const [showSlider, setShowSlider] = useState(true);

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
        <SwiperSlide>
          <a href=""><img src="/img/room1-t.jpg" alt="" /></a>
        </SwiperSlide>
        <SwiperSlide><img src="/img/room2.jpg" alt="" style={{}}/></SwiperSlide>
        <SwiperSlide><img src="/img/room3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/room4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/room5.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default VerticalSlider;
