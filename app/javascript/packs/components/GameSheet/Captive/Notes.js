import { connect } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import FormControl from "react-bootstrap/lib/FormControl";

import * as actionCreators from "../../../actions/Captive";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, value: this.props.notes };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.editing && this.state.editing) {
      $(ReactDOM.findDOMNode(this)).find("textarea").focus();
    }
  }

  edit = () => {
    this.setState({ editing: true });
  }

  reset() {
    this.setState({ editing: false, value: this.props.notes });
  }

  save() {
    if (this.props.notes != this.state.value) {
      this.props.setNotes(this.state.value);
    }

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

  onBlur = () => {
    this.save();
  }

  form() {
    return (
      <div className="editable notes">
        <FormControl componentClass="textarea" className="no-borders" value={this.state.value} placeholder="Notes" onChange={this.onChange} onKeyUp={this.onKeyUp} onBlur={this.onBlur} />
      </div>
    );
  }

  view() {
    return (
      <div>
        <div className="notes-label" />

        <div className="editable notes" onClick={this.edit}>
          <div className="content preformatted">
            {this.props.notes}
          </div>
        </div>
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
  notes: state.game.notes
});

export default connect(mapStateToProps, actionCreators)(Notes);
