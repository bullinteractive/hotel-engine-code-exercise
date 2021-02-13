import initialState from "./initialState";
import * as ACTION  from "./actionTypes.js"

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type){
    case ACTION.GET_RESULTS:
      return {
        ...state,
        meta: {
          isLoadingSearchResults: true
        }
      };
    case ACTION.GET_RESULTS_SUCCESS:
      return {
        ...state,
        meta: {
          isLoadingSearchResults: false
        },
        search: {
          searchResults: payload
        }
      };
    case ACTION.GET_RESULTS_ERROR:
        return {
          ...state,
          meta: {
            isLoadingSearchResults: false,
            errorMessage: payload
          },
          search: {
            searchResults: []
          }
        };
    default:
      return state;
  }
};

export default reducer;