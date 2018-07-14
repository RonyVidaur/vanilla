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
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container position="end">
              <Navbar.Item>
                <Button className="is-small" color="primary">
                  Sign Up
                </Button>
              </Navbar.Item>
              <Navbar.Item>
                <Button className="is-small" color="danger">
                  Sign In
                </Button>
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  }
}
