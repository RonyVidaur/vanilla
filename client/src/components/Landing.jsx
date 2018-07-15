import React, { Component } from "react";
import { Button } from "react-bulma-components/full";
import transaction from "../assets/img/transaction.svg";
import Toolbar from "./Toolbar";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <div className="landing">
          <div className="left">
            <h1>
              <strong>Vanilla</strong> is the easiest way to manage your money
            </h1>
            <h2>Try it now by creating an account</h2>
            <Button>Get Started</Button>
          </div>
          <div className="right">
            <img src={transaction} alt="vanilla expense tracker" />
          </div>
        </div>
      </div>
    );
  }
}
