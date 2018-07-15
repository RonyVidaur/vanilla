import React, { Component } from "react";

export default class Transaction extends Component {
  render() {
    return (
      <div className="transaction">
        <span>category goes here</span>
        <p>{this.props.details.title}</p>
        <p>{this.props.details.amount}</p>
      </div>
    );
  }
}
