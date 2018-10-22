import { connect } from "react-redux";
import React from "react";

const capitalize = (word) => word.charAt(0).toUpperCase() + word.substr(1);

class PlayerAttribute extends React.Component {
  render() {
    return (
      <React.Fragment>
        <strong>{capitalize(this.props.attr)}</strong>
        {' '}
        {this.props[this.props.attr]}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  strength: state.game.strength,
  dexterity: state.game.dexterity,
  will: state.game.will
});

export default connect(mapStateToProps)(PlayerAttribute);
