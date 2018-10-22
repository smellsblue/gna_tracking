import { connect } from "react-redux";
import React from "react";

import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";

import PlayerAttribute from "./PlayerAttribute";

class Captive extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={4}>
          <PlayerAttribute attr="strength" />
        </Col>

        <Col xs={4}>
          <PlayerAttribute attr="dexterity" />
        </Col>

        <Col xs={4}>
          <PlayerAttribute attr="will" />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  health: state.game.health,
  time: state.game.time,
  inventory: state.game.inventory,
  notes: state.game.notes
});


export default connect(mapStateToProps)(Captive);
