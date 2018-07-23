import React, { Component } from "react";
import Transaction from "./Transaction";
import AddTransactionModal from "./AddTransactionModal";
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
      this.props.deleteTransaction(id);
    };
    const listHolderStyle = {
      display: "flex",
      flexDirection: "column",
      padding: "20px 150px"
    };
    const { transactions } = this.props.transaction;
    return (
      <div className="main" style={listHolderStyle}>
        <AddTransactionModal modal={{ closeOnBlur: true }} />
        {transactions.length ? (
          transactions.map(transaction => {
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
          })
        ) : (
          <div
            style={{
              textAlign: "center",
              paddingTop: "15%",
              backgroundColor: "white",
              minHeight: "400px"
            }}
          >
            <h2 className="default-text">
              You haven't registered any transactions yet
            </h2>
            <h1>
              <strong>:)</strong>
            </h1>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ transaction: state.transaction });

export default connect(
  mapStateToProps,
  { getTransactions, deleteTransaction }
)(TransactionList);
