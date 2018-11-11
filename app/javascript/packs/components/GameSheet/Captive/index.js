import { connect } from "react-redux";
import React from "react";
import $ from "jquery";

import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";

import PlayerAttribute from "./PlayerAttribute";
import Inventory from "./Inventory";
import Notes from "./Notes";
import Time from "./Time";

class Captive extends React.Component {
  componentDidMount() {
    $("body").addClass("black");
  }

  componentWillUnmount() {
    $("body").removeClass("black");
  }

  render() {
    return (
      <div className="captive">
        <Row>
          <Col xs={4}>
          </Col>

          <Col xs={8}>
            <PlayerAttribute attr="strength" />
            <PlayerAttribute attr="dexterity" />
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
            <Notes />
          </Col>
        </Row>
      </div>
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
