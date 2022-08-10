import React, { Component } from "react";
import { connect } from "react-redux";
import { increment } from "./app-redux/actions";

const App = ({ count, handleIncrement }) => {
  return (
    <div className="App">
      <button onClick={handleIncrement}>INC: {count}</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.app.count,
  state
});

const mapDispatchToProps = (dispatch) => ({
  handleIncrement: (payload) => dispatch(increment(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
