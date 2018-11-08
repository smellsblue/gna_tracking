import { connect } from "react-redux";
import React from "react";

import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";

import PlayerAttribute from "./PlayerAttribute";
import Inventory from "./Inventory";
import Time from "./Time";

class Captive extends React.Component {
  render() {
    return (
      <React.Fragment>
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

        <Row>
          <Col xs={12}>
            <PlayerAttribute attr="health" max={20} />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Time />
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Inventory />
          </Col>

          <Col xs={6}>
          </Col>
        </Row>
      </React.Fragment>
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
