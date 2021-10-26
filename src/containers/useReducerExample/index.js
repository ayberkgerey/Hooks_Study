import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AgeContext} from '../../contexts/ageContext';

export default function UseReducerExample() {
  const {age, dispatch} = useContext(AgeContext);
  return (
    <View style={styles.container}>
      <Text>Your age is {age}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch({type: 'ADD_AGE'});
        }}>
        <Text>Add</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch({type: 'DECREASE_AGE'});
        }}>
        <Text>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    width: 80,
    height: 50,
    borderRadius: 10,
    borderWidth: 1.5,
    borderStyle: 'dotted',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
