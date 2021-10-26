import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import UseStateExample from '../../containers/useStateExample';
import UseContextExample from '../../containers/useContextExample';
import UseReducerExample from '../../containers/useReducerExample';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="UseState Example" component={UseStateExample} />
        <Drawer.Screen
          name="UseContext Example"
          component={UseContextExample}
        />
        <Drawer.Screen
          name="UseReducer Example"
          component={UseReducerExample}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
