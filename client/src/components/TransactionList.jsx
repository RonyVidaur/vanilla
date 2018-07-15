import React, { Component } from "react";
import Transaction from "./Transaction";

export default class TransactionList extends Component {
  render() {
    const transactions = this.props.transactions.map(transaction => {
      return <Transaction details={{ ...transaction }} />;
    });
    return <div>{transactions}</div>;
  }
}
