import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
  const [lightTheme, setLightTheme] = useState(true);
  const light = {syntax: '#555', ui: '#ddd', bg: '#eee'};
  const dark = {syntax: '#ddd', ui: '#333', bg: '#555'};
  return (
    <ThemeContext.Provider value={{lightTheme, setLightTheme, light, dark}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
