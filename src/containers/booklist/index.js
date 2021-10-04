import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Booklist() {
  return (
    <View style={styles.container}>
      <Text>BookList Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
