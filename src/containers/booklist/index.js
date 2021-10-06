import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../../contexts/themeContext';
import ChangeContext from '../../components/changeContext/ChangeContext';

export default function Booklist() {
  return (
    <ThemeContext.Consumer>
      {context => {
        const {lightTheme, setLightTheme, light, dark, name} = context;
        return (
          <View style={styles.container}>
            <ChangeContext />
            <Text>BookList Page</Text>
            <Text>{name}</Text>
          </View>
        );
      }}
    </ThemeContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
