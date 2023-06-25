import React, { useState, useEffect, useRef } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Link } from 'react-router-dom';
import '../ui/css/Lobby.css';

const RoomImage = ({ id, image, name, description, price, isVisible }) => {
  const cardStyle = {
    opacity: isVisible ? 1 : 0,
    transform: `translateX(${isVisible ? '0%' : '-100%'})`,
    transition: 'opacity 0.5s, transform 0.5s',
  };
  const imageStyle = {
    width: '300px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '20px'
  };

  return (
    <div className="room-card" style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <div className="room-details">
        <h3 className="room-name">
          <Link to={`/room/${id}`}>{name}</Link>
        </h3>
        <p className="room-description">{description}</p>
        <p className="room-price">${price} a night</p>
      </div>
    </div>
  );
};

function RoomList({ searchOptions }) {
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [visibleRooms, setVisibleRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const roomHeaderRef = useRef(null);
  const roomGridRef = useRef(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const roomsRef = collection(db, 'room');
      const querySnapshot = await getDocs(roomsRef);
      const rooms = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFilteredRooms(rooms);
      setVisibleRooms(rooms);
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (roomHeaderRef.current) {
        roomHeaderRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (searchOptions) {
      const fetchFilteredRooms = async () => {
        const roomsRef = collection(db, 'room');
        const q = query(
          roomsRef,
          where('roomPrice', '>=', searchOptions.priceRange[0]),
          where('roomPrice', '<=', searchOptions.priceRange[1])
        );
        const querySnapshot = await getDocs(q);
        const rooms = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setFilteredRooms(rooms);
        setVisibleRooms(rooms);
      };

      fetchFilteredRooms();
    }
  }, [searchOptions]);

  const handleRoomClick = (id) => {
    setSelectedRoomId(id);
  };

  if (!searchOptions) {
    return null;
  }

  return (
    <div className="lobbycss" id="roomImage" style={{ display: 'flex', flexDirection: 'column' }}>
      <h5 ref={roomHeaderRef} style={{ display: 'flex', justifyContent: 'start', marginTop: '20px' }}>
        SEARCHED ROOM:
      </h5>
      <div className="room-grid" ref={roomGridRef}>
        {filteredRooms.map((room, index) => (
          <div className="card" key={index}>
            <RoomImage
              id={room.id}
              image={room.roomURL}
              name={room.roomName}
              description={room.roomDescription}
              price={room.roomPrice}
              isVisible={visibleRooms.includes(room)}
              onClick={handleRoomClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomList;
