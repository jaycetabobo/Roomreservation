import React, { useState, useEffect, useRef } from 'react';
import '../ui/css/RoomSearch.css';

const RoomSearch = ({ onSearch, onSearchClick }) => {
  const [priceRange, setPriceRange] = useState([0, 0]); // Default price range: 0 to 100
  const [visible, setVisible] = useState(true); // Track visibility state

  const handlePriceChange = (event) => {
    const { value } = event.target;
    setPriceRange([0, parseInt(value)]);
  };

  const handleSearch = () => {
    const searchOptions = {
      priceRange,
    };
    onSearch(searchOptions);
    onSearchClick(); // Trigger the connection or targeting of the <p> tag
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px threshold
      setVisible(!isScrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`room-search ${visible ? '' : 'hidden'}`}>
      <h6 style={{ marginRight: '20px', color: 'black' }}>Price Range: {priceRange[0]} - {priceRange[1]}</h6>
      <label>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={handlePriceChange}
          style={{ width: '100px', marginRight: '10px' , color: 'black'}}
        />
      </label>
      <button onClick={handleSearch} style={{ width: '100px', fontSize: '15px', borderRadius: '20px', backgroundColor:'rgba(128, 128, 128, 0.5)'}}>Search</button>
    </div>
  );
};

export default RoomSearch;
