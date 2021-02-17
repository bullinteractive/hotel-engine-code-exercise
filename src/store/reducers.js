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
        },
        search: {
          ...state.search,
          searchQuery: payload,
          searchFilters: [],
          searchResults: []
        }
      };
    case ACTION.GET_RESULTS_SUCCESS:
      const { items } = payload;
      const languages = items
        .sort((a, b) => (a.language > b.language ? 1 : -1))
        .map(item => item.language)
        .filter((language) => language != null);
      const uniqueLanguages = [...new Set(languages)];
      return {
        ...state,
        meta: {
          isLoadingSearchResults: false
        },
        search: {
          ...state.search,
          searchFilters: uniqueLanguages,
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
          ...state.search,
          searchResults: []
        }
      };
    case ACTION.GET_SORTED_RESULTS:
      const { searchQuery } = payload;
      return {
        ...state,
        meta: {
          isLoadingSearchResults: true
        },
        search: {
          ...state.search,
          searchQuery: searchQuery,
          searchFilters: [],
          searchResults: []
        }
      };
    case ACTION.GET_SORTED_RESULTS_SUCCESS:
      const { items: results } = payload;
      const languagesSorted = results
        .sort((a, b) => (a.language > b.language ? 1 : -1))
        .map(item => item.language)
        .filter((language) => language != null);
      const uniqueLanguagesSorted = [...new Set(languagesSorted)];
      return {
        ...state,
        meta: {
          isLoadingSearchResults: false
        },
        search: {
          ...state.search,
          searchFilters: uniqueLanguagesSorted,
          searchResults: payload
        }
      };
    case ACTION.GET_SORTED_RESULTS_ERROR:
      return {
        ...state,
        meta: {
          isLoadingSearchResults: false,
          errorMessage: payload
          },
        search: {
          ...state.search,
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
    case ACTION.PRELOAD_SINGLE_RESULT:
        return {
          ...state,
          search: {
            ...state.search,
            selectedRepository: payload
          }
        };
    default:
      return state;
  }
};