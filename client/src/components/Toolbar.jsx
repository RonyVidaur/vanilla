import React, { Component } from "react";
import { Navbar, Button } from "react-bulma-components/full";
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
              <h1 className="main-title-toolbar">Vanilla</h1>
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container position="end">
              <Navbar.Item>
                <a href="/logout">
                  <Button className="is-small" color="danger">
                    Log out
                  </Button>
                </a>
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  }
}
