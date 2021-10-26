import React from 'react';
import DrawerNavigation from './src/navigation/drawerNavigation';
import BookContextProvider from './src/contexts/bookContext';
import AgeContextProvider from './src/contexts/ageContext';

export default function App() {
  return (
    <BookContextProvider>
      <AgeContextProvider>
        <DrawerNavigation />
      </AgeContextProvider>
    </BookContextProvider>
  );
}
//I can also wrap only the component I want to use context inside.
