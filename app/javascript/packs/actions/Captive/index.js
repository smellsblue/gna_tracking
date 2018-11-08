import * as actionTypes from "./actionTypes";

export const changeTime = (increase) => ({
  type: actionTypes.CHANGE_TIME,
  increase
});

export const decreasePlayerAttribute = (attribute) => ({
  type: actionTypes.DECREASE_PLAYER_ATTRIBUTE,
  attribute
});

export const increasePlayerAttribute = (attribute) => ({
  type: actionTypes.INCREASE_PLAYER_ATTRIBUTE,
  attribute
});

export const setInventoryItem = (index, value) => ({
  type: actionTypes.SET_INVENTORY_ITEM,
  index,
  value
});
