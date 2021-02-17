import * as ACTION  from "./actionTypes.js"

export const useActions = (state, dispatch) => ({
  getResults: data => dispatch(
    { 
      type: ACTION.GET_RESULTS, 
      payload: data 
    }
  ),
  getSortedResults: ({
    search, 
  }) => dispatch(
    { 
      type: ACTION.GET_SORTED_RESULTS, 
      payload: search
    }
  ),
  getSingleResult: data => dispatch(
    { 
      type: ACTION.GET_SINGLE_RESULT, 
      payload: data 
    }
  ),
  preloadSingleResult: data => dispatch(
    { 
      type: ACTION.PRELOAD_SINGLE_RESULT, 
      payload: data 
    }
  )
});