import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function UseStateExample() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>UseState Example</Text>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            setCount(count - 1);
          }}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.buttonText}>{count}</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            setCount(count + 1);
          }}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonStyle: {
    borderRadius: 60,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
});
