import { connect } from "react-redux";
import React from "react";

import concat from "lodash/concat";
import fill from "lodash/fill";
import map from "lodash/map";

import TimeTick from "./TimeTick";

class Time extends React.Component {
  render() {
    let initialCheckedValues = concat(fill(new Array(this.props.time), true), fill(new Array(20 - this.props.time), false));

    return map(initialCheckedValues, (checked, i) => (
      <TimeTick key={`time-tick-${i}`} initiallyChecked={checked} />
    ));
  }
}

const mapStateToProps = (state) => ({
  time: state.game.time
});

export default connect(mapStateToProps)(Time);
