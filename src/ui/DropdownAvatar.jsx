import React, { useState } from 'react';
import '../ui/css/DropdownAvatar.css'

function DropdownAvatar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
    // For example, clear user session or navigate to a logout page
    console.log('Logout clicked');
  };

  return (
    <div className="dropdown">
      <div className="avatar" onClick={toggleDropdown}>
        
      </div>
      {isOpen && (
        <div className="dropdown-content">
            <a href="/my-profile">My Profile</a>
          <button onClick={handleLogout} style={{}}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default DropdownAvatar;