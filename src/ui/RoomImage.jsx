import React from 'react';
import PropTypes from 'prop-types';
import "../ui/css/Lobby.css";

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

RoomImage.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default RoomImage;