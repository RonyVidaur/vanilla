import React, { Component } from "react";

import Dashboard from "./components/Dashboard";
import Toolbar from "./components/Toolbar";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Toolbar />
          <Dashboard />
        </div>
      </Provider>
    );
  }
}

export default App;
