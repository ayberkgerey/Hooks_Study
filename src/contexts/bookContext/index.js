import React, {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = ({children}) => {
  const [books, setBooks] = useState([
    {id: 1, title: 'Lord Of the Rings 1'},
    {id: 2, title: 'Lord Of the Rings 2'},
    {id: 3, title: 'Lord Of the Rings 3'},
    {id: 4, title: 'Hobbit'},
  ]);

  const addBook = title => {
    setBooks([...books, {id: books.length + 1, title: title}]);
  };

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

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
