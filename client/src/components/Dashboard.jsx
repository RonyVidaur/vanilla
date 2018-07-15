import React, { Component } from "react";
import CondensedInfo from "./CondensedInfo";

export default class Dashboard extends Component {
  state = {
    accounts: [{ id: 1, name: "Ficohsa", balance: 3000 }],
    currentDate: new Date().getDate(),
    currentUser: { firstName: "Rony", lastName: "Vidaur" }
  };
  render() {
    const { accounts, currentDate, currentUser } = this.state;
    return (
      <div className="dashboard">
        <h1>
          Hi <strong>{currentUser.firstName}</strong>,
        </h1>
        <h2>See where you spend your money</h2>
        <div className="info-holder">
          <CondensedInfo date={currentDate} />
        </div>
      </div>
    );
  }
}
