import React, { Component } from "react";
import Transaction from "./Transaction";
import { Button } from "react-bulma-components/full";
import { connect } from "react-redux";
import {
  getTransactions,
  deleteTransaction
} from "../actions/transactionActions";

class TransactionList extends Component {
  componentDidMount() {
    this.props.getTransactions();
  }
  render() {
    const onDelete = id => {
      console.log("deleting ", id);
      this.props.deleteTransaction(id);
    };
    const buttonStyle = {
      margin: "0 0 10px auto",
      width: "150px"
    };
    const listHolderStyle = {
      display: "flex",
      flexDirection: "column",
      padding: "20px 150px"
    };
    const { transactions } = this.props.transaction;
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
          return (
            <Transaction details={{ ...transaction }}>
              <Button
                className="is-small is-danger"
                onClick={onDelete.bind(this, transaction.id)}
              >
                X
              </Button>
            </Transaction>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({ transaction: state.transaction });

export default connect(
  mapStateToProps,
  { getTransactions, deleteTransaction }
)(TransactionList);
