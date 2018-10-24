import * as actionTypes from "../../actions/Captive/actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
  case actionTypes.INCREASE_PLAYER_ATTRIBUTE:
    return {
      ...state,
      [action.attribute]: state[action.attribute] + 1
    };
  case actionTypes.DECREASE_PLAYER_ATTRIBUTE:
    return {
      ...state,
      [action.attribute]: state[action.attribute] - 1
    };
  }

  return state;
};
