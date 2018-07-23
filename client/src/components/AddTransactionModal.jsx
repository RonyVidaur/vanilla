import React, { Component } from "react";
import { Button, Modal, Section } from "react-bulma-components/full";
import { connect } from "react-redux";
import { addTransaction } from "../actions/transactionActions";

class AddTransactionModal extends Component {
  state = {
    show: false,
    options: [
      {
        name: "Expense",
        value: 1
      },
      {
        name: "Income",
        value: 2
      }
    ],
    type: 1
  };
  open = () => this.setState({ show: true });
  close = () => this.setState({ show: false });
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  optionChange = event => {
    this.setState({ type: event.target.value });
  };
  handleSubmit = () => {
    if (this.state.type && this.state.title && this.state.amount) {
      let newTransaction = {
        type: this.state.type,
        title: this.state.title,
        amount: this.state.amount,
        tag: this.state.tag,
        accountId: 2
      };
      this.props.addTransaction(newTransaction);
      this.close();
    } else {
      this.setState({
        isShowingError: true
      });
    }
  };
  render() {
    const { options, type } = this.state;
    const error = this.state.isShowingError ? (
      <p className="red-text">*please fill all the fields</p>
    ) : (
      ""
    );
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
          <Modal.Card
            style={{ padding: "100px" }}
            modal={{ closeOnBlur: true }}
          >
            <Modal.Card.Head>
              <Modal.Card.Title>Add a new transaction</Modal.Card.Title>
            </Modal.Card.Head>
            <Modal.Card.Body>
              <div style={{ backgroundColor: "white" }}>
                {error}
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      name="title"
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Amount</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      name="amount"
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Tag</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="tag"
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Transaction type</label>
                  <div className="control">
                    <div className="select">
                      <select onChange={this.optionChange} value={type}>
                        {options.map(item => (
                          <option key={item.value} value={item.value}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <Section>
                <Button
                  onClick={this.handleSubmit}
                  style={{ width: "100%" }}
                  className="is-primary"
                >
                  Save
                </Button>
              </Section>
            </Modal.Card.Body>
          </Modal.Card>
        </Modal>
      </div>
    );
  }
}
const mapStateToprops = state => ({
  transaction: state.transaction
});
export default connect(
  mapStateToprops,
  { addTransaction }
)(AddTransactionModal);
