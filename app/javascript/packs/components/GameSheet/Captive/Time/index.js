import React from "react";

import Group from "./Group";

class Time extends React.Component {
  render() {
    return (
      <React.Fragment>
        <strong>Time</strong>
        {' '}
        <Group index={0} />
        <Group index={5} />
        <Group index={10} />
        <Group index={15} />
      </React.Fragment>
    );
  }
}

export default Time;
