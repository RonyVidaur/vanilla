import React, { Component } from "react";
import Toolbar from "./components/Toolbar";
import Landing from "./components/Landing";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Landing />
      </div>
    );
  }
}

export default App;
