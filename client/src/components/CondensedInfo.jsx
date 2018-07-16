import React, { Component } from "react";
import { connect } from "react-redux";
class CondensedInfo extends Component {
  render() {
    const { transactions } = this.props.transaction;
    const totalAmount = type => {
      return transactions
        .filter(transaction => {
          return transaction.type === type;
        })
        .map(element => {
          return element.amount || 0;
        })
        .reduce((acc, currVal) => {
          return acc + currVal;
        }, 0);
    };
    return (
      <div className="condensed-info">
        <div className="date-holder">
          {new Date().getDate()}
          <p>JUL</p>
        </div>
        <div className="expense-holder">
          <p className="expense-category">INCOME</p>
          <p className="income-amount">${totalAmount(2)}</p>
        </div>
        <div className="expense-holder">
          <p className="expense-category">EXPENSES</p>
          <p className="expense-amount">${totalAmount(1)}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transaction: state.transaction
  };
};

export default connect(mapStateToProps)(CondensedInfo);
