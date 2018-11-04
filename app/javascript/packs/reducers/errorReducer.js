import * as actionTypes from "../actions/actionTypes";

export default function(state = null, action) {
  switch (action.type) {
  case actionTypes.SET_ERROR:
    return action.message;
  }

  return state;
};
