import { connect } from "react-redux";
import React from "react";

import GameSheet from "./GameSheet";

class Game extends React.Component {
  gameBook() {
    switch (this.props.gameBook) {
    case "captive":
      return "Captive";
    default:
      throw new Error(`Invalid game book: ${this.props.gameBook}`);
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="game-title">{this.props.gameName} <small>&mdash; {this.gameBook()}</small></h1>
        <GameSheet />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  gameBook: state.gameInfo.book,
  gameName: state.gameInfo.name
});

export default connect(mapStateToProps)(Game);
