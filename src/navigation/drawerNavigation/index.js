import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import UseStateExample from '../../hooks/useStateExample';
import Booklist from '../../containers/booklist';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="UseState Example" component={UseStateExample} />
        <Drawer.Screen name="BookList" component={Booklist} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
