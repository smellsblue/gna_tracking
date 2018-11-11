import React from "react";

import Group from "./Group";

class Time extends React.Component {
  render() {
    return (
      <div className="time">
        <div className="time-row">
          <Group index={0} />
          <Group index={5} />
        </div>

        <div className="time-row">
          <Group index={10} />
          <Group index={15} />
        </div>
      </div>
    );
  }
}

export default Time;
