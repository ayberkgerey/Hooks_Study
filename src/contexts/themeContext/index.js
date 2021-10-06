import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
  const [lightTheme, setLightTheme] = useState(true);
  const [name, setName] = useState('Ayberk');
  const light = {syntax: '#555', ui: '#ddd', bg: '#eee'};
  const dark = {syntax: '#ddd', ui: '#333', bg: '#555'};

  const changeName = () => {
    setName('Bernard');
  };
  return (
    <ThemeContext.Provider
      value={{changeName, lightTheme, setLightTheme, light, dark, name}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
