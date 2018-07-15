import React, { Component } from "react";

export default class Dashboard extends Component {
  state = {
    accounts: [{ id: 1, name: "Ficohsa", balance: 3000 }],
    currentDate: new Date().getDate()
  };
  render() {
    const { accounts, currentDate } = this.state;
    return (
      <div>
        <h1>{currentDate}</h1>
        {accounts[0].balance}
      </div>
    );
  }
}
