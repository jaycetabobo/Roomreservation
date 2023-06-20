import React, { useState, useEffect } from 'react';
import "../ui/css/LoginFormCard.css"
import { useNavigate } from 'react-router-dom';

const LoginFormCard = () => {
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!showCard) {
    return null;
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginEmailChange = (event) => {
    setLoginEmail(event.target.value);
  };

  const handleLoginPasswordChange = (event) => {
    setLoginPassword(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleRegisterEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };

  const handleRegisterPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  const handleRegisterNameChange = (event) => {
    setRegisterName(event.target.value);
  };

  const handleRegisterUsernameChange = (event) => {
    setRegisterUsername(event.target.value);
  };


  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Email:', loginEmail);
    console.log('Password:', loginPassword);
    console.log('Remember Me:', rememberMe);
    navigate('/lobby');
    
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here
    console.log('Email:', registerEmail);
    console.log('Password:', registerPassword);
    console.log('Name:', registerName);
    console.log('Username:', registerUsername);
  };

  return (
    
    <div className={`floating-form ${showCard ? 'show' : ''}`}>
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => handleTabChange('login')}
        >
          Login
        </div>
        <div
          className={`tab ${activeTab === 'register' ? 'active' : ''}`}
          onClick={() => handleTabChange('register')}
        >
          Register
        </div>
      </div>
      <div className="form-container">
        {activeTab === 'login' && (
          <form onSubmit={handleLoginSubmit}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="login-email">Email</label>
              <input
                type="email"
                id="login-email"
                value={loginEmail}
                onChange={handleLoginEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                value={loginPassword}
                onChange={handleLoginPasswordChange}
                required
              />
            </div>
            <div className="form-group1">
              <label htmlFor="remember-me">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                Remember&nbsp;Me
              </label>
            </div>
            <button type="submit" >Login</button>
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </form>
        )}
        {activeTab === 'register' && (
          <form onSubmit={handleRegisterSubmit}>
            <h2>Register</h2>
            <div className="form-group">
              <label htmlFor="register-name">Name</label>
              <input
                type="text"
                id="register-name"
                value={registerName}
                onChange={handleRegisterNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="register-username">Username</label>
              <input
                type="text"
                id="register-username"
                value={registerUsername}
                onChange={handleRegisterUsernameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="register-email">Email</label>
              <input
                type="email"
                id="register-email"
                value={registerEmail}
                onChange={handleRegisterEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                id="register-password"
                value={registerPassword}
                onChange={handleRegisterPasswordChange}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginFormCard;
