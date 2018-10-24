import CaptiveReducer from "./CaptiveReducer";

export default function(state = {}, action) {
  state = CaptiveReducer(state, action);
  // state = OtherGameReducer(state, action);
  return state;
};
