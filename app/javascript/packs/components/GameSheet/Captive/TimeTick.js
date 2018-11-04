import { connect } from "react-redux";
import React from "react";

import Checkbox from "react-bootstrap/lib/Checkbox";

import * as actionCreators from "../../../actions/Captive";

class TimeTick extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: this.props.initiallyChecked };
  }

  onChange = () => {
    this.props.changeTime(!this.state.checked);
    this.setState((state) => ({ checked: !state.checked }));
  }

  render() {
    return <Checkbox inline checked={this.state.checked} onChange={this.onChange} />;
  }
}

export default connect(null, actionCreators)(TimeTick);
