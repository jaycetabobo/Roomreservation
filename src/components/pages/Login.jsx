import React from 'react'
import VideoBackground from '../../ui/VideoBackground';
import LoginFormCard from '../../ui/LoginFormCard';
import "../css/Login.css"


export default function Login() {
  return (
    <>
      <div className='login-text'>
      <div className='logo-text'>
        <img className='logo' src="../public/hotel-logo.svg" alt="Logo" />
        <p>WELCOME TO</p>
        <h1>RITZ HOTEL</h1>
        <h1>ROOM RESERVATION</h1>
        <p>LIVING YOUR EXPERIENCE</p>
      </div>
    </div>
      <LoginFormCard />
      <VideoBackground />
    </>
  )
}
