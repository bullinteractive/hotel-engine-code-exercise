import axios from 'axios';
import { initialState } from "./initialState";
import * as ACTION  from "./actionTypes.js"

export const applyMiddleware = dispatch => action => {
  dispatch(action);
  switch(action.type) {
    case ACTION.GET_RESULTS: 

      const query = action.payload;
      
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
    case ACTION.GET_SORTED_RESULTS:
      const { 
        searchQuery: search, 
        sortBy,
        sortOrder 
      } = action.payload;
        
      return axios.get(`https://api.github.com/search/repositories?q=${search}&sort=${sortBy}&order=${sortOrder}`)
        .then(serverResponse => dispatch(
            {
              type: ACTION.GET_SORTED_RESULTS_SUCCESS, 
              payload: serverResponse.data
            }
          ))
        .catch(error => dispatch(
          {
            type: ACTION.GET_SORTED_RESULTS_ERROR, 
            payload: error
          }
        ));
    case ACTION.GET_SINGLE_RESULT: 

      const { 
        name: repoName, 
        login: username 
      } = action.payload;

      return axios.get(`https://api.github.com/repos/${username}/${repoName}`)
        .then(serverResponse => dispatch(
            {
              type: ACTION.GET_SINGLE_RESULT_SUCCESS, 
              payload: serverResponse.data
            }
          ))
        .catch(error => dispatch(
          {
            type: ACTION.GET_SINGLE_RESULT_ERROR, 
            payload: error
          }
        ));
    default:
      return initialState;
  }
}

