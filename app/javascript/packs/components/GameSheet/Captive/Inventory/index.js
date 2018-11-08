import React from "react";

import Item from "./Item";

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <Item index={0} />
        <Item index={1} />
        <Item index={2} />
      </div>
    );
  }
}

export default Inventory;
