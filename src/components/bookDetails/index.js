import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BookContext} from '../../contexts/bookContext';

export default function BookDetails({book}) {
  const {removeBook} = useContext(BookContext);

  return (
    <View style={styles.container} key={book.id}>
      <View style={styles.textContainer}>
        <Text style={styles.listText}>{book.id}) </Text>
        <Text style={styles.listText}>{book.title}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          removeBook(book.id);
        }}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: 'red',
    width: 50,
    height: 20,
    borderRadius: 7,
    borderWidth: 1,
  },
  listText: {
    fontWeight: '600',
  },
});
