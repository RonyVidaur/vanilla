import React, { Component } from "react";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Toolbar from "./components/Toolbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let view;
    if (!isLoggedIn) {
      view = <Landing />;
    } else {
      view = <Dashboard />;
    }
    return (
      <div>
        <Toolbar />
        {view}
      </div>
    );
  }
}

export default App;
