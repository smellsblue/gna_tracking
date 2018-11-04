import * as actionTypes from "./actionTypes";

export const setError = (message) => ({
  type: actionTypes.SET_ERROR,
  message
});
