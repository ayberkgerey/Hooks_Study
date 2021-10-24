import React from 'react';
import DrawerNavigation from './src/navigation/drawerNavigation';
import BookContextProvider from './src/contexts/bookContext';

export default function App() {
  return (
    <BookContextProvider>
      <DrawerNavigation />
    </BookContextProvider>
  );
}
//I can also wrap only the component I want to use context inside.
