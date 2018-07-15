import React, { Component } from "react";

export default class CondensedInfo extends Component {
  render() {
    return (
      <div className="condensed-info">
        <div className="date-holder">{this.props.date}</div>
      </div>
    );
  }
}
