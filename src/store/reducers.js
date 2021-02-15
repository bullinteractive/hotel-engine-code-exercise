import { initialState } from "./initialState";
import * as ACTION  from "./actionTypes.js"

export const reducer = (state = initialState, action) => {
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
    case ACTION.GET_SINGLE_RESULT:
      return {
        ...state,
        meta: {
          isLoadingSingleResults: true
        },
        search: {
          ...state.search,
          selectedRepository: {}
        }
      };
    case ACTION.GET_SINGLE_RESULT_SUCCESS:
      return {
        ...state,
        meta: {
          isLoadingSingleResults: false
        },
        search: {
          ...state.search,
          selectedRepository: payload
        }
      };
    case ACTION.GET_SINGLE_RESULT_ERROR:
      return {
        ...state,
        meta: {
          isLoadingSingleResults: false,
          errorMessage: payload
        },
        search: {
          ...state.search,
          selectedRepository: {}
        }
      };
    default:
      return state;
  }
};