import { connect } from "react-redux";
import React from "react";

import concat from "lodash/concat";
import fill from "lodash/fill";
import map from "lodash/map";

import FormGroup from "react-bootstrap/lib/FormGroup";

import Tick from "./Tick";

class Group extends React.Component {
  constructor(props) {
    super(props);
    let initialCheckedValues = concat(fill(new Array(this.props.time), true), fill(new Array(20 - this.props.time), false));
    this.state = { initiallyChecked: initialCheckedValues.slice(this.props.index, this.props.index + 5) }
  }

  tick(index) {
    return <Tick initiallyChecked={this.state.initiallyChecked[index]} />;
  }

  render() {
    return (
      <FormGroup>
        {this.tick(0)}
        {this.tick(1)}
        {this.tick(2)}
        {this.tick(3)}
        {this.tick(4)}
      </FormGroup>
    );
  }
}

const mapStateToProps = (state) => ({
  time: state.game.time
});

export default connect(mapStateToProps)(Group);
