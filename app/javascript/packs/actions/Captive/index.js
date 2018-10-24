import * as actionTypes from "./actionTypes";

export const decreasePlayerAttribute = (attribute) => ({
  type: actionTypes.DECREASE_PLAYER_ATTRIBUTE,
  attribute
});

export const increasePlayerAttribute = (attribute) => ({
  type: actionTypes.INCREASE_PLAYER_ATTRIBUTE,
  attribute
});
