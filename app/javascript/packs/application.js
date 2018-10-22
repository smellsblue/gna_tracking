import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import Game from "./components/Game";
import reducer from "./reducers";

$(function() {
  let store = createStore(reducer, { game: window.game, assets: window.assets });

  ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.getElementById("game")
  );
});
