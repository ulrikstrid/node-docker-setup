import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    message: "Hello react!"
  };

  componentDidMount() {
    window.setTimeout(() => {
      fetch("/api").then(res => res.text()).then(message => {
        this.setState({
          message
        });
      });
    }, 1500);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
