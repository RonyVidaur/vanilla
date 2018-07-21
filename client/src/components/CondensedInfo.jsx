import React, { Component } from "react";
import { connect } from "react-redux";
class CondensedInfo extends Component {
  render() {
    const { transactions } = this.props.transaction || [];
    const totalAmount = type => {
      return (
        transactions
          .filter(transaction => {
            return transaction.type === type;
          })
          .map(element => {
            return element.amount || 0;
          })
          .reduce((acc, currVal) => {
            return acc + currVal;
          }, 0)
          .toFixed(2) || 0
      );
    };
    const totalIncome = totalAmount(2);
    const totalExpenses = totalAmount(1);
    const currentBalance = amount => {
      return amount < 0 ? (
        <span style={{ fontWeight: "500" }} className="red-text">
          {amount}
        </span>
      ) : (
        <span style={{ fontWeight: "500" }} className="green-text">
          {amount}
        </span>
      );
    };
    return (
      <div>
        <h1
          style={{ textAlign: "center", fontSize: "20px", fontWeight: "700" }}
        >
          Current Balance ${" "}
          {currentBalance((totalIncome - totalExpenses).toFixed(2))}
        </h1>
        <div className="condensed-info">
          <div className="date-holder">
            {new Date().getDate()}
            <p>JUL</p>
          </div>
          <div className="expense-holder">
            <p className="expense-category">INCOME</p>
            <p className="income-amount">${totalIncome}</p>
          </div>
          <div className="expense-holder">
            <p className="expense-category">EXPENSES</p>
            <p className="expense-amount">${totalExpenses}</p>
          </div>
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
