import React, {useReducer, createContext} from 'react';
import {AgeReducer} from '../../reducers/ageReducer';

export const AgeContext = createContext();

const AgeContextProvider = ({children}) => {
  const [age, dispatch] = useReducer(AgeReducer, 10);

  return (
    <AgeContext.Provider value={{age, dispatch}}>
      {children}
    </AgeContext.Provider>
  );
};

export default AgeContextProvider;
