import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "./components/ErrorBoundary";
import Game from "./components/Game";
import { getStore, setStore } from "./Store";
import reducer from "./reducers";

$(function() {
  setStore(createStore(reducer, {
    assets: window.assets,
    game: window.game.game_data,
    gameInfo: window.game.game_info
  }));

  ReactDOM.render(
    <Provider store={getStore()}>
      <ErrorBoundary>
        <Game />
      </ErrorBoundary>
    </Provider>,
    document.getElementById("game")
  );
});
