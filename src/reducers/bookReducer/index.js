export const BookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {id: action.books.length + 1, title: action.books.title},
      ];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

// This component is just a note. I am not using in this project.

/* Dispatch functions

    dispatch({type: 'ADD_BOOK',book: {title,id}});  title and id is states over here

    We are adding states after comma.
*/
