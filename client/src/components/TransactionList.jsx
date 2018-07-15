import React, { Component } from "react";
import Transaction from "./Transaction";
import { Button } from "react-bulma-components/full";

export default class TransactionList extends Component {
  render() {
    const transactions = this.props.transactions.map(transaction => {
      return <Transaction details={{ ...transaction }} key={transaction.id} />;
    });
    const buttonStyle = {
      margin: "0 0 10px auto",
      width: "150px"
    };
    const listHolderStyle = {
      display: "flex",
      "flex-direction": "column",
      padding: "20px 100px"
    };
    return (
      <div style={listHolderStyle}>
        <Button
          style={buttonStyle}
          className="is-primary"
          onClick={() => {
            console.log("i was pressed");
          }}
        >
          Add Transaction
        </Button>
        {transactions}
      </div>
    );
  }
}
