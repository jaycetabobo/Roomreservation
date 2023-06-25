import React, { useState, useRef, useEffect } from 'react';
import '../ui/css/Lobby.css';

const RoomImage = ({ image, name, description, price, isVisible}) => {
  const cardStyle = {
    opacity: isVisible ? 1 : 0,
    transform: `translateX(${isVisible ? '0%' : '-100%'})`,
    transition: 'opacity 0.5s, transform 0.5s',
  };
  return (
    <div className="room-card" style={cardStyle}>
      <img src={image} alt={name} className="room-image" />
      <div className="room-details">
        <h3 className="room-name">{name}</h3>
        <p className="room-description">{description}</p>
        <p className="room-price">${price} a night</p>
      </div>
    </div>
  );
};

function RoomList({ searchOptions }) {
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [visibleRooms, setVisibleRooms] = useState([]);
  const roomHeaderRef = useRef(null); // Ref for the <p> tag containing "Rooms"

  const rooms = [
    {
      image: "/img/room1.jpg",
      name: "De Luxe Room",
      description: "4 adults | 1 child",
      price: "50"
    },
    {
      image: "/img/room1.jpg",
      name: "De Luxe Room",
      description: "2 adults | 2 child",
      price: "111"
    },
    {
      image: "/img/room1.jpg",
      name: "De Luxe Room",
      description: "7 adults | 5 child",
      price: "500"
    },
    {
      image: "/img/room1.jpg",
      name: "De Luxe Room",
      description: "1 adults | 5 child",
      price: "200"
    },
  ];

  useEffect(() => {
    if (searchOptions) {
      const filtered = rooms.filter(room => {
        const isPriceInRange =
          parseInt(room.price) >= searchOptions.priceRange[0] &&
          parseInt(room.price) <= searchOptions.priceRange[1];
        return isPriceInRange;
      });

      setFilteredRooms(filtered);
    }
  }, [searchOptions]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibleRooms(filteredRooms);

      if (roomHeaderRef.current) {
        roomHeaderRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [filteredRooms]);

  if (!searchOptions) {
    return null;
  }

  return (
    <div className="lobbycss" id="roomImage" style={{ display: 'flex', flexDirection: 'column' }}>
      <h5 ref={roomHeaderRef} style={{display: 'flex',justifyContent: 'start', marginTop: '20px'}}>SEARCHED ROOM:</h5>
      <div className="room-grid">
        {filteredRooms.map((room, index) => (
          <div className="card" key={index}>
            <RoomImage
              image={room.image}
              name={room.name}
              description={room.description}
              price={room.price}
              isVisible={visibleRooms.includes(room)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomList;
