import React, {createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = ({children}) => {
  const [books, setBooks] = useState([
    {id: 1, title: 'Lord Of the Rings 1'},
    {id: 2, title: 'Lord Of the Rings 2'},
    {id: 3, title: 'Lord Of the Rings 3'},
    {id: 4, title: 'Hobbit'},
  ]);
  return (
    <BookContext.Provider value={{books, setBooks}}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

/*
  I can also give (props) at the top besides ({children})
  and write {props.children} between the BookContext.Provider tag.
*/
