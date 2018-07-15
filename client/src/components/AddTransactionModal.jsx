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
              Click on the "X" button on the top-right button to close the Modal
              (pass closeOnEsc=false to the modal to avoid closing it with the
              keyboard)
            </Section>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

// export default connect()(TransactionModal);
