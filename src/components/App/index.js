import React, { Component } from "react";
import logo from "../../logo.svg";
import "./style.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Testing Deployment</p>
        </header>
      </div>
    );
  }
}

export default App;
