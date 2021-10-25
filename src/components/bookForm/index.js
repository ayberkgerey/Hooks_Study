import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {BookContext} from '../../contexts/bookContext';

export default function BookForm() {
  const {addBook} = useContext(BookContext);
  const [title, setTitle] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Book Name"
        style={styles.bookInput}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          addBook(title);
          setTitle();
        }}>
        <Text style={{color: 'white'}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  bookInput: {
    width: 300,
    height: 40,
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 20,
    borderRightColor: 'white',
  },
  addBtn: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 50,
    borderWidth: 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
