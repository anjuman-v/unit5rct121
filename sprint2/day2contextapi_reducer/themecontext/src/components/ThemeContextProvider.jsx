import React, { createContext, useState } from 'react';

export const Appcontext = createContext();



export const ThemeContextProvider = ({ children }) => {

  const [state, setState] = useState('light');

  const ToggleTheme = () => {
    state === 'light' ? setState('dark') : setState('light');
  };
  return (
    
    
    <Appcontext.Provider value={[state, ToggleTheme]}>
      <div>{children}</div>
    </Appcontext.Provider>
  );
};

 
