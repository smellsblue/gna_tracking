import { connect } from "react-redux";
import React from "react";

import Alert from "react-bootstrap/lib/Alert";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null }
  }

  componentDidCatch(error, info) {
    if (this.props.debug) {
      console.log("An error was caught in the error boundary", error, info);
    }

    this.setState({ error: "Oops! An error occurred! Please reload and try again." });
  }

  render() {
    const message = this.state.error || this.props.message;

    if (message) {
      return (
        <Alert bsStyle="danger">
          {message}
        </Alert>
      );
    }

    return this.props.children;
  }
}

const mapStateToProps = (state) => ({
  debug: state.gameInfo.debug,
  message: state.error
});

export default connect(mapStateToProps)(ErrorBoundary);
