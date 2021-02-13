import axios from 'axios';
import { initialState } from "./initialState";
import * as ACTION  from "./actionTypes.js"

export const applyMiddleware = dispatch => action => {
  dispatch(action);
  const query = action.payload;
  switch(action.type) {
    case ACTION.GET_RESULTS: 
      return axios.get(`https://api.github.com/search/repositories?q=${query}`)
        .then(serverResponse => dispatch(
            {
              type: ACTION.GET_RESULTS_SUCCESS, 
              payload: serverResponse.data
            }
          ))
        .catch(error => dispatch(
          {
            type: ACTION.GET_RESULTS_ERROR, 
            payload: error
          }
        ));
    default:
      return initialState;
  }
}