import { combineReducers } from "redux";

let emptyReducer = (state = {}) => state;

export default combineReducers({ assets: emptyReducer });
