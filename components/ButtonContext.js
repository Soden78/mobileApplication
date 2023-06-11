import React, { createContext, useState } from 'react';

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <ButtonContext.Provider value={{ isOn, toggleButton }}>
      {children}
    </ButtonContext.Provider>
  );
};