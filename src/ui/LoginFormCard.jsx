import React, { useState, useEffect } from 'react';
import "../ui/css/LoginFormCard.css"
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider, db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";

const LoginFormCard = () => {
  const navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerName, setRegisterName] = useState('');

  const handleLogin = async () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        if (user) {
          await setDoc(doc(db, "user", user.uid), {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;

        toast.error(errorMessage);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 3000);
    auth.onAuthStateChanged((user) => user && navigate("/lobby"));

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!showCard) {
    return null;
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => user && navigate("/lobby"));
  // });

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



  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const user = result.user;

      if (user) {
        navigate('/lobby');
      }
    } catch (error) {
      const errorMessage = error.message;
      toast.error("Error! Please Check Your Email and Password");
    }
    
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    if (registerPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }  

    try {
      const result = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      const user = result.user;
      if (user) {
        await setDoc(doc(db, "user", user.uid), {
          name: registerName,
          email: registerEmail,
        });
      }
      toast.success("Registration successful!");
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };

  return (
    <>
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
            <button type="submit" style={{borderRadius: '10px'}} >Login</button>
            <div className="forgot-password" style={{marginBottom: '5px'}}>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <div className="google-auth" style={{borderTop: '1px solid black'}}>
              <button 
              onClick={handleLogin}
              style={{
                background: '#DB4437',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                marginTop: '15px'
              }}
              >
                Sign in with Google
              </button>
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
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <button type="submit" style={{borderRadius: '10px'}}>Register</button>
          </form>
        )}
      </div>
    </div>
    <Toaster
    position="top-right"
    toastOptions={{
      duration: 1500,
      style: {
        fontSize: 14,
      },
    }}
  />
  </>
  );
};

export default LoginFormCard;
