import { createContext, useReducer } from 'react';
import logger from 'use-reducer-logger';

import { reducer } from './reducers';
import { initialState } from "./initialState";
import { useActions } from './actions';
import { applyMiddleware } from './middleware';

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    process.env.NODE_ENV === 'development' ? logger(reducer) : reducer,
    initialState
  );  
  
  // Attach middleware to capture every dispatch
  const enhancedDispatch = applyMiddleware(dispatch);
  
  const actions = useActions(state, enhancedDispatch);
  
  return (
    <StoreContext.Provider
      value={{ state, enhancedDispatch, actions }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };