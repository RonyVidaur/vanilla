import React, { Component } from "react";

export default class CondensedInfo extends Component {
  render() {
    return (
      <div className="condensed-info">
        <div className="date-holder">
          <p>{this.props.date}</p>
          <p>JUL</p>
        </div>
        <div className="expense-holder">
          <p className="expense-category">INCOME</p>
          <p className="income-amount">$200</p>
        </div>
        <div className="expense-holder">
          <p className="expense-category">EXPENSES</p>
          <p className="expense-amount">$50</p>
        </div>
      </div>
    );
  }
}
