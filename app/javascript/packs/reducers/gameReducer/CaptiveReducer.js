import * as actionTypes from "../../actions/Captive/actionTypes";
import { CaptiveAjax } from "../../util/Ajax";

export default function(state = {}, action) {
  switch (action.type) {
  case actionTypes.CHANGE_TIME:
    CaptiveAjax.changeTime(action.increase);
    let newTime = state.time;

    if (action.increase) {
      newTime++;
    } else {
      newTime--;
    }

    return {
      ...state,
      time: newTime
    };
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
  case actionTypes.SET_INVENTORY_ITEM:
    // TODO: Ajax call
    let inventory = [...state.inventory];
    inventory[action.index] = action.value;

    return {
      ...state,
      inventory
    };
  }

  return state;
};
