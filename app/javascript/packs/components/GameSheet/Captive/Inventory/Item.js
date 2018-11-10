import { connect } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import FormControl from "react-bootstrap/lib/FormControl";

import * as actionCreators from "../../../../actions/Captive";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, value: this.props.inventory[this.props.index] };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.editing && this.state.editing) {
      $(ReactDOM.findDOMNode(this)).find("input").focus();
    }
  }

  edit = () => {
    this.setState({ editing: true });
  }

  reset() {
    this.setState({ editing: false, value: this.props.inventory[this.props.index] });
  }

  save() {
    this.props.setInventoryItem(this.props.index, this.state.value);
    this.setState({ editing: false });
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }

  onKeyUp = (e) => {
    if (e.key == "Escape") {
      this.reset();
    }
  }

  onKeyPress = (e) => {
    if (e.key == "Enter") {
      this.save();
    }
  }

  onBlur = () => {
    this.save();
  }

  form() {
    return (
      <div className="editable">
        <FormControl type="text" value={this.state.value} placeholder="Inventory Item" onChange={this.onChange} onKeyPress={this.onKeyPress} onKeyUp={this.onKeyUp} onBlur={this.onBlur} />
      </div>
    );
  }

  view() {
    return (
      <div className="editable" onClick={this.edit}>
        {this.props.inventory[this.props.index]}
      </div>
    );
  }

  render() {
    if (this.state.editing) {
      return this.form();
    } else {
      return this.view();
    }
  }
}

const mapStateToProps = (state) => ({
  inventory: state.game.inventory
});

export default connect(mapStateToProps, actionCreators)(Item);
