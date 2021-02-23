import React, { Component } from "react";
import { connect } from "react-redux";
import { handleIntialData } from "../actions/shared";
import Dashboard from "../components/dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleIntialData());
  }
  render() {
    return <div>{this.props.authedUser === true ? null : <Dashboard />}</div>;
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
