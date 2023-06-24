import React, { useState } from 'react';
import '../ui/css/DropdownAvatar.css';
import { Navigate, useNavigate } from 'react-router-dom';

function DropdownAvatar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
    // For example, clear user session or navigate to a logout page
    console.log('Logout clicked');
    navigate('/');
  };

  return (
    <div className="dropdown">
      <img
        src='/hotel-logo.svg'
        alt="Avatar"
        className="avatar"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="dropdown-content">
          <a href="/book-history">My Profile</a>
          <button onClick={handleLogout} style={{}}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default DropdownAvatar;
