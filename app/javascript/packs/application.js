import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import Game from "./components/Game";
import reducer from "./reducers";

$(function() {
  let store = createStore(reducer, {
    assets: window.assets,
    game: window.game.game_data,
    gameInfo: {
      name: window.game.name,
      book: window.game.game_book
    }
  });

  ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.getElementById("game")
  );
});
