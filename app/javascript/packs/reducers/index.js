import { combineReducers } from "redux";

import gameReducer from "./gameReducer";

let emptyReducer = (state = {}) => state;

export default combineReducers({
  assets: emptyReducer,
  game: gameReducer,
  gameInfo: emptyReducer
});
