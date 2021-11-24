import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import uuid from 'react-native-uuid';

export const BookContext = createContext();

const BookContextProvider = ({children}) => {
  const [books, setBooks] = useState([]);

  const addBook = title => {
    setBooks([...books, {id: uuid.v4(), title: title}]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('myBooks', JSON.stringify(books));
      console.log('Data stored');
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveData = async () => {
    try {
      const valueString = await AsyncStorage.getItem('myBooks');
      const value = JSON.parse(valueString);
      if (value !== null) {
        // We have data!!
        console.log('Data has pulled');
        console.log(value);
        setBooks(value);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  useEffect(() => {
    storeData();
  }, [books]);

  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

/*
  I can also give (props) at the top besides ({children})
  and write {props.children} between the BookContext.Provider tag.
*/
