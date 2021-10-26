export const AgeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_AGE':
      return state + 1;
    case 'DECREASE_AGE':
      return state - 1;
    default:
      return state;
  }
};
