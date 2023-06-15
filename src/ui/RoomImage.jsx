import React from 'react';
import PropTypes from 'prop-types';
import "../ui/css/Lobby.css";

const RoomImage = ({ image, name, description, price }) => {
  return (
    <div className="room-card">
      <img src={image} alt={name} className="room-image" />
      <div className="room-details">
        <h3 className="room-name">{name}</h3>
        <p className="room-description">{description}</p>
        <p className="room-price">from ${price} a night</p>
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