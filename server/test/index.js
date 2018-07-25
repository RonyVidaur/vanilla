process.env.NODE_ENV = "test";
const Account = require("../models/account");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app");
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);
let transactionId;
// this is the dummy user known account id
let testAccountId = 9;
const cookie =
  "session=eyJwYXNzcG9ydCI6eyJ1c2VyIjo5fX0=; session.sig=tacE1hrslPNufp1CidN0sZORqAg";

describe("/POST", () => {
  it("Should NOT POST a transaction without all the required fields", done => {
    let transaction = {
      title: "KFC",
      tag: "food",
      type: 1
    };
    chai
      .request(server)
      .post("/api/user/accounts/transactions")
      .set("Cookie", cookie)
      .send(transaction)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
        res.body.errors[0].should.have
          .property("message")
          .eql("Transaction.amount cannot be null");
        done();
      });
  });

  it("Should POST a transaction if all data is valid", done => {
    let transaction = {
      title: "Car",
      amount: 1000,
      tag: "household",
      type: 2,
      accoundId: testAccountId
    };
    chai
      .request(server)
      .post("/api/user/accounts/transactions")
      .set("Cookie", cookie)
      .send(transaction)
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(201);
        expect(res.body).to.be.a("object");
        transactionId = res.body.id;
        done();
      });
  });
});

describe("/DELETE", () => {
  it("should return an error when deleting an unexistent transactions", done => {
    chai
      .request(server)
      .delete("/api/user/accounts/transactions/321")
      .set("Cookie", cookie)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property("message").eql("Transaction Not Found");
        done();
      });
  });

  it("should delete a transaction", done => {
    chai
      .request(server)
      .delete(`/api/user/accounts/transactions/${transactionId}`)
      .set("Cookie", cookie)
      .end((err, res) => {
        res.should.have.status(204);
        done();
      });
  });
});

describe("/GET", () => {
  it("should serve the static login page", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.type.should.equal("text/html");
        done();
      });
  });

  it("Should get the account of an authenticated user", done => {
    chai
      .request(server)
      .get("/api/user/account")
      .set("Cookie", cookie)
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.type.should.equal("application/json");
        res.body.should.include.keys(
          "id",
          "name",
          "balance",
          "createdAt",
          "updatedAt"
        );
        done();
      });
  });
  it("Should not perform any kind on transaction on transactions url", done => {
    chai
      .request(server)
      .get(`/api/accounts/transactions`)
      .set("Cookie", cookie)
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(405);
        res.type.should.equal("application/json");
        done();
      });
  });
  it("Should return error when user is no authenticated", done => {
    chai
      .request(server)
      .get("/api/user/accounts/")
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
        expect(res.body)
          .to.have.property("message")
          .eql("Invalid Credentials");
        done();
      });
  });
});
