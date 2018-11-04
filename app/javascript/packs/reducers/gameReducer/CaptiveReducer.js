import * as actionTypes from "../../actions/Captive/actionTypes";
import { CaptiveAjax } from "../../util/Ajax";

export default function(state = {}, action) {
  switch (action.type) {
  case actionTypes.INCREASE_PLAYER_ATTRIBUTE:
    CaptiveAjax.increasePlayerAttribute(action.attribute);

    return {
      ...state,
      [action.attribute]: state[action.attribute] + 1
    };
  case actionTypes.DECREASE_PLAYER_ATTRIBUTE:
    CaptiveAjax.decreasePlayerAttribute(action.attribute);

    return {
      ...state,
      [action.attribute]: state[action.attribute] - 1
    };
  }

  return state;
};
