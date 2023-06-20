import React, { createContext, useState } from 'react';

export const RoomSearchContext = createContext();

export const RoomSearchProvider = ({ children }) => {
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const contextValue = {
    checkinDate,
    setCheckinDate,
    checkoutDate,
    setCheckoutDate,
    adults,
    setAdults,
    children,
    setChildren,
  };

  return (
    <RoomSearchContext.Provider value={contextValue}>
      {children}
    </RoomSearchContext.Provider>
  );
};
