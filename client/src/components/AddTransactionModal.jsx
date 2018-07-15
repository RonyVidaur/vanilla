import React, { Component } from "react";
import { Button, Modal, Section } from "react-bulma-components/full";
import { connect } from "react-redux";
// import { addTransaction } from "../actions/transactionActions";
export default class AddTransactionModal extends Component {
  state = {
    show: false
  };
  open = () => this.setState({ show: true });
  close = () => this.setState({ show: false });
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Button
          style={{
            margin: "0 0 10px auto",
            width: "150px"
          }}
          className="is-primary"
          onClick={this.open}
        >
          Add Transaction
        </Button>
        <Modal show={this.state.show} onClose={this.close}>
          <Modal.Content>
            <Section style={{ backgroundColor: "white" }}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" />
                </div>
              </div>
              <div className="field">
                <label className="label">Amount</label>
                <div className="control">
                  <input className="input" />
                </div>
              </div>
              <div className="field">
                <label className="label">Transaction type</label>
                <div className="control">
                  <div className="select">
                    <select>
                      <option>Select an option</option>
                      <option>Income</option>
                      <option>Expense</option>
                    </select>
                  </div>
                </div>
              </div>
            </Section>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

// export default connect()(TransactionModal);
