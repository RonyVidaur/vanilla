import React, { Component } from "react";
import { Button } from "react-bulma-components/full";
import transaction from "../assets/img/transaction.svg";
import axios from "../../node_modules/axios";

export default class Landing extends Component {
  render() {
    const login = () => {
      axios.get("auth/google");
    };
    return (
      <div>
        <div className="landing">
          <div className="left">
            <h1>
              <strong>Vanilla</strong> is the easiest way to manage your money
            </h1>
            <h2>Try it now by creating an account</h2>
            <a href="http://localhost:7000/google">
              <Button>Get Started</Button>
            </a>
          </div>
          <div className="right">
            <img src={transaction} alt="vanilla expense tracker" />
          </div>
        </div>
      </div>
    );
  }
}
