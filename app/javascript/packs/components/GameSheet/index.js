import { connect } from "react-redux";
import React from "react";

import Captive from "./Captive";

class GameSheet extends React.Component {
  render() {
    switch (this.props.gameBook) {
    case "captive":
      return (
        <Captive />
      );
    default:
      throw new Error(`Invalid game book: ${this.props.gameBook}`);
    }
  }
}

const mapStateToProps = (state) => ({
  gameBook: state.gameInfo.book
});

export default connect(mapStateToProps)(GameSheet);
