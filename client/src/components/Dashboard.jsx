import React, { Component } from "react";
import CondensedInfo from "./CondensedInfo";
import TransactionList from "./TransactionList";
import { connect } from "react-redux";
import { getUserInfo } from "../actions/userActions";
import { userInfo } from "os";
class Dashboard extends Component {
  componentDidMount() {
    this.props.getUserInfo();
  }
  state = {
    currentDate: new Date().getDate()
  };
  render() {
    const { userInfo } = this.props.user;
    const { currentDate } = this.state;
    return (
      <div className="dashboard">
        <div className="user-info">
          <div className="dashboard-left">
            <h1>
              Hi <strong>{userInfo.firstName}</strong>,
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
const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps,
  { getUserInfo }
)(Dashboard);
