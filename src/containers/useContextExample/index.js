import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BookContext} from '../../contexts/bookContext';

export default function UseContextExample() {
  const {books} = useContext(BookContext);

  return (
    <View style={styles.container}>
      {books.map(book => {
        return (
          <Text>
            {book.id}){book.title}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 100,
    paddingRight: 100,
  },
});
