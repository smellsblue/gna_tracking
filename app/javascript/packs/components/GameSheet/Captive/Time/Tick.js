import { connect } from "react-redux";
import React from "react";

import Glyphicon from "react-bootstrap/lib/Glyphicon";

import * as actionCreators from "../../../../actions/Captive";

class Tick extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: this.props.initiallyChecked };
  }

  onClick = () => {
    this.props.changeTime(!this.state.checked);
    this.setState((state) => ({ checked: !state.checked }));
  }

  checkMark() {
    if (this.state.checked) {
      return (
        <Glyphicon glyph="ok" />
      );
    }

    return (
      <div>&nbsp;</div>
    );
  }

  render() {
    return (
      <div className="captive-tick" onClick={this.onClick}>
        {this.checkMark()}
      </div>
    );
  }
}

export default connect(null, actionCreators)(Tick);
