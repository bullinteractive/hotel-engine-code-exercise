import * as ACTION  from "./actionTypes.js"

export const useActions = (state, dispatch) => ({
  triggerAction: data => dispatch({ type: ACTION.GET_RESULTS, payload: data })
});