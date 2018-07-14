import React, { Component } from "react";
import { Navbar } from "react-bulma-components/full";
import Vanilla from "../Vanilla.svg";

export default class Toolbar extends Component {
  render() {
    return (
      <div>
        <Navbar className="has-shadow">
          <Navbar.Brand>
            <Navbar.Item href="#">
              <img
                src={Vanilla}
                alt="Vanilla: a modern world expense tracker"
                width="60"
                height="auto"
              />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
