import React from 'react';
import DrawerNavigation from './src/navigation/drawerNavigation';
import ThemeContextProvider from './src/contexts/themeContext';

export default function App() {
  return (
    <ThemeContextProvider>
      <DrawerNavigation />
    </ThemeContextProvider>
  );
}
