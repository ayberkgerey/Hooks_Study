import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BookContext} from '../../contexts/bookContext';
import BookList from '../../components/bookList';

export default function UseContextExample() {
  const {books} = useContext(BookContext);

  return (
    <View style={styles.container}>
      <Text>You currently have {books.length} books.</Text>
      <BookList />
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
