import { connect } from "react-redux";
import React from "react";

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

  render() {
    return (
      <React.Fragment>
        <strong>{capitalize(this.props.attr)}</strong>
        {' '}
        {this.props[this.props.attr]}
        {' '}
        <ButtonGroup>
          <Button bsSize="small" onClick={this.increase}><Glyphicon glyph="plus" /></Button>
          <Button bsSize="small" onClick={this.decrease}><Glyphicon glyph="minus" /></Button>
        </ButtonGroup>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  strength: state.game.strength,
  dexterity: state.game.dexterity,
  will: state.game.will
});

export default connect(mapStateToProps, actionCreators)(PlayerAttribute);
