import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import uuid from 'react-native-uuid';

export const BookContext = createContext();

const BookContextProvider = ({children}) => {
  const [books, setBooks] = useState([
    {id: 1, title: 'Lord Of the Rings 1'},
    {id: 2, title: 'Lord Of the Rings 2'},
    {id: 3, title: 'Lord Of the Rings 3'},
    {id: 4, title: 'Hobbit'},
  ]);

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
      const value = await AsyncStorage.getItem('myBooks');
      if (value !== null) {
        // We have data!!
        console.log('Data has pulled');
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  useEffect(() => {
    storeData();
    retrieveData();
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
