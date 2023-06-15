import React, { useState, useEffect} from 'react';
import "../ui/css/RoomSearch.css"

const RoomSearch = () => {
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCheckinDateChange = (e) => {
    setCheckinDate(e.target.value);
  };

  const handleCheckoutDateChange = (e) => {
    setCheckoutDate(e.target.value);
  };

  const incrementAdults = () => {
    setAdults(adults + 1);
  };

  const decrementAdults = () => {
    if (adults > 1) {
      setAdults(adults - 1);
    }
  };

  const incrementChildren = () => {
    setChildren(children + 1);
  };

  const decrementChildren = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const bottomThreshold = documentHeight - windowHeight - 20;

    if (scrollPosition > bottomThreshold) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  const handleSearch = () => {
    // Perform room search based on the selected options
    // You can use the state values (checkinDate, checkoutDate, adults, children) to implement the search functionality
    console.log('Perform room search');
    console.log('Check-in Date:', checkinDate);
    console.log('Check-out Date:', checkoutDate);
    console.log('Adults:', adults);
    console.log('Children:', children);
  };

  return (
    <div className={`room-search ${isHidden ? 'hidden' : ''}`}>
      <h2>Room Search</h2>
      <label>
        Check-in Date:
        <input type="date" value={checkinDate} onChange={handleCheckinDateChange} />
      </label>
      <label>
        Check-out Date:
        <input type="date" value={checkoutDate} onChange={handleCheckoutDateChange} />
      </label>
      <label>
        Adults:
        <button onClick={incrementAdults} style={{fontSize: "7px"}}>+</button>
        <span>{adults}</span>
        <button onClick={decrementAdults}>-</button>
      </label>
      <label>
        Children:
        <button onClick={incrementChildren} style={{fontSize: "7px"}}>+</button>
        <span>{children}</span>
        <button onClick={decrementChildren}>-</button>
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default RoomSearch;
