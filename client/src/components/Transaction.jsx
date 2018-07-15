import React, { Component } from "react";

export default class Transaction extends Component {
  render() {
    return (
      <div
        className={`transaction ${
          this.props.details.type === 1 ? "red-border" : "green-border"
        }`}
      >
        {this.props.children}
        <span>category goes here</span>
        <p className="transaction-title">{this.props.details.title}</p>
        <p
          className={
            this.props.details.type === 1
              ? "transaction-amount red-text"
              : "transaction-amount green-text"
          }
        >
          $ {this.props.details.amount}
        </p>
      </div>
    );
  }
}
