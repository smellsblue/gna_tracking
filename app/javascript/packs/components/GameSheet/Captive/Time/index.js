import { connect } from "react-redux";
import React from "react";

import concat from "lodash/concat";
import fill from "lodash/fill";
import map from "lodash/map";

import FormGroup from "react-bootstrap/lib/FormGroup";

import Tick from "./Tick";

class Time extends React.Component {
  ticks() {
    let initialCheckedValues = concat(fill(new Array(this.props.time), true), fill(new Array(20 - this.props.time), false));

    return map(initialCheckedValues, (checked, i) => (
      <Tick key={`time-tick-${i}`} initiallyChecked={checked} />
    ));
  }

  render() {
    return (
      <React.Fragment>
        <strong>Time</strong>
        {' '}
        <FormGroup>
          {this.ticks()}
        </FormGroup>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  time: state.game.time
});

export default connect(mapStateToProps)(Time);
