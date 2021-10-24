import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BookContext} from '../../contexts/bookContext';
import BookDetails from '../bookDetails';

export default function BookList() {
  const {books} = useContext(BookContext);

  return books.length ? (
    <View style={styles.container}>
      {books.map(book => {
        return <BookDetails book={book} />;
      })}
    </View>
  ) : (
    <View>
      <Text>There are no books.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
