process.env.NODE_ENV = "test";
const Transaction = require("../models/transaction");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app");
let should = chai.should();
chai.use(chaiHttp);
let transactionId;
describe("/GET", () => {
  it("Should get transaction from an account", done => {
    chai
      .request(server)
      .get("/api/accounts/2/transactions")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe("/POST", () => {
  it("should post a transaction to an account", done => {
    let transaction = {
      title: "KFC",
      amount: 200,
      tag: "food",
      type: 1
    };
    chai
      .request(server)
      .post("/api/accounts/2/transactions")
      .send(transaction)
      .end((err, res) => {
        res.body.should.be.a("object");
        res.body.title.should.equal(transaction.title);
        transactionId = res.body.id;
        res.should.have.status(201);
        done();
      });
  });
  it("Should not post a transaction with invalid body", done => {
    let transaction = {
      title: "KFC"
    };
    chai
      .request(server)
      .post("/api/accounts/2/transactions")
      .send(transaction)
      .end((err, res) => {
        res.body.should.be.a("object");
        res.should.have.status(400);
        done();
      });
  });

  describe("/DELETE", () => {
    it("should delete a transaction", done => {
      chai
        .request(server)
        .delete(`/api/accounts/2/transactions/${transactionId}`)
        .end((err, res) => {
          res.should.have.status(204);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
