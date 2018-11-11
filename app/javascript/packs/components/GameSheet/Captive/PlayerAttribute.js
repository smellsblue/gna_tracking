import { connect } from "react-redux";
import React from "react";
import classNames from "classnames";

import Button from "react-bootstrap/lib/Button";
import ButtonGroup from "react-bootstrap/lib/ButtonGroup";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

import * as actionCreators from "../../../actions/Captive";

const capitalize = (word) => word.charAt(0).toUpperCase() + word.substr(1);

class PlayerAttribute extends React.Component {
  increase = () => {
    this.props.increasePlayerAttribute(this.props.attr);
  }

  decrease = () => {
    this.props.decreasePlayerAttribute(this.props.attr);
  }

  isIncreaseDisabled() {
    return this.props.max && this.props[this.props.attr] >= this.props.max;
  }

  render() {
    let classes = classNames({
      "player-attribute": true,
      "health": this.props.attr == "health"
    });

    return (
        <div className={classes}>
        <div className="attribute-label">
          {capitalize(this.props.attr)}
        </div>

        <div className="content">
          {this.props[this.props.attr]}
          <ButtonGroup vertical className="adjustments pull-right">
            <Button bsSize="small" onClick={this.increase} disabled={this.isIncreaseDisabled()}><Glyphicon glyph="plus" /></Button>
            <Button bsSize="small" onClick={this.decrease}><Glyphicon glyph="minus" /></Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  health: state.game.health,
  strength: state.game.strength,
  dexterity: state.game.dexterity,
  will: state.game.will
});

export default connect(mapStateToProps, actionCreators)(PlayerAttribute);
