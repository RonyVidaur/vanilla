import React, { Component } from "react";
import CondensedInfo from "./CondensedInfo";
import TransactionList from "./TransactionList";
export default class Dashboard extends Component {
  state = {
    currentDate: new Date().getDate(),
    currentUser: { firstName: "Rony", lastName: "Vidaur" }
  };
  render() {
    const { currentDate, currentUser } = this.state;
    return (
      <div className="dashboard">
        <div className="user-info">
          <div className="dashboard-left">
            <h1>
              Hi <strong>{currentUser.firstName}</strong>,
            </h1>
            <h2>See where you spend your money</h2>
          </div>
        </div>
        <div className="info-holder">
          <CondensedInfo date={currentDate} />
        </div>
        <TransactionList />
      </div>
    );
  }
}
