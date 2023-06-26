import React, { useState, useEffect } from 'react';
import VideoBackground from '../../ui/VideoBackground';
import LoginFormCard from '../../ui/LoginFormCard';

export default function Login() {
  const [hideLogoText, setHideLogoText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLogoText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>
        {`
          .login-text {
            text-align: center;
          }

          

          .logo-text {
            transition: opacity 0.5s ease;
            opacity: ${hideLogoText ? 0 : 1};
          }

          .hide {
            display: none;
          }
        `}
      </style>
      <div className={`login-text ${hideLogoText ? 'hide' : ''}`}>
        <div className='logo-text'>
          <img className='logo' src="/hotel-logo.svg" alt="Logo" />
          <p>WELCOME TO</p>
          <h1>RITZ HOTEL</h1>
          <h1>ROOM RESERVATION</h1>
          <p>LIVING YOUR EXPERIENCE</p>
        </div>
      </div>
      <LoginFormCard />
      <VideoBackground />
    </>
  );
}
