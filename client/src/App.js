import React, { Component } from "react";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Toolbar from "./components/Toolbar";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
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
      <Provider store={store}>
        <div>
          <Toolbar />
          {view}
        </div>
      </Provider>
    );
  }
}

export default App;
