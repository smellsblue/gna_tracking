import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import gameReducer from "./gameReducer";

let emptyReducer = (state = {}) => state;

export default combineReducers({
  assets: emptyReducer,
  game: gameReducer,
  gameInfo: emptyReducer,
  error: errorReducer
});
