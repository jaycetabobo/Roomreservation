import React from 'react';
import '../ui/css/Lobby.css'

function RoomCard({ image, name, description, price }) {
  return (
    <div className="room-card">
      <img src={image} alt={name} className="room-image" />
      <div className="room-details">
        <h3 className="room-name">{name}</h3>
        <p className="room-description">{description}</p>
        <p className="room-price">${price}</p>
      </div>
    </div>
  );
}

function RoomList() {
  const rooms = [
    {
      image: "/img/room1.jpg",
      name: "De Luxe Room",
      description: "2 adults | 1 child below 7",
      price: "99900"
    },
    {
      image: "/img/room1.jpg",
      name: "De Luxe Room",
      description: "2 adults | 1 child below 7",
      price: "99900"
    },
    {
      image: "/img/room1.jpg",
      name: "De Luxe Room",
      description: "2 adults | 1 child below 7",
      price: "99900"
    },
    {
      image: "/img/room1.jpg",
      name: "De Luxe Room",
      description: "2 adults | 1 child below 7",
      price: "99900"
    },
  ];

  return (
    <div className="lobbycss" id="roomImage">
      <div className="room-grid">
        {rooms.map((room, index) => (
          <div className="card" key={index}>
            <RoomCard
              image={room.image}
              name={room.name}
              description={room.description}
              price={room.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomList;
