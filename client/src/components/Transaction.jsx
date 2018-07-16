import React, { Component } from "react";
import { Tag } from "react-bulma-components/full";

export default class Transaction extends Component {
  render() {
    return (
      <div
        className={`transaction ${
          this.props.details.type === 1 ? "red-border" : "green-border"
        }`}
      >
        {this.props.children}
        <p style={{ marginLeft: "20px" }} className="transaction-title">
          {this.props.details.title}
        </p>
        <p
          className={
            this.props.details.type === 1
              ? "transaction-amount red-text"
              : "transaction-amount green-text"
          }
        >
          <Tag color="primary">{this.props.details.tag || "transaction"}</Tag>
          <span style={{ marginLeft: "10px" }}>
            $ {this.props.details.amount}
          </span>
        </p>
      </div>
    );
  }
}
