import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import {ThemeContext} from '../../contexts/themeContext';

export default function ChangeContext() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ThemeContext.Consumer>
      {context => {
        const {changeName} = context;
        const toggleSwitch = () => {
          changeName();
          setIsEnabled(previousState => !previousState);
        };
        return (
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        );
      }}
    </ThemeContext.Consumer>
  );
}
