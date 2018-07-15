import React, { Component } from "react";
import Transaction from "./Transaction";
import { Button } from "react-bulma-components/full";

export default class TransactionList extends Component {
  state = {
    transactions: [
      { id: 1, title: "shoes", amount: 50, type: "expense" },
      { id: 2, title: "freelance", amount: "200", type: "income" }
    ]
  };
  render() {
    const buttonStyle = {
      margin: "0 0 10px auto",
      width: "150px"
    };
    const listHolderStyle = {
      display: "flex",
      "flex-direction": "column",
      padding: "20px 150px"
    };
    const transactions = this.state.transactions;
    return (
      <div style={listHolderStyle}>
        <Button
          style={buttonStyle}
          className="is-primary"
          onClick={() => {
            const transaction = prompt("Enter the transaction");
            if (transaction) {
              this.setState(state => ({
                transactions: [
                  ...state.transactions,
                  { id: 5, title: transaction, amount: 100 }
                ]
              }));
            }
          }}
        >
          Add Transaction
        </Button>
        {transactions.map(transaction => {
          return <Transaction details={{ ...transaction }} />;
        })}
      </div>
    );
  }
}
