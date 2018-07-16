process.env.NODE_ENV = "test";
const Account = require("../models/account");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app");
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe("accounts", () => {
  beforeEach(done => {
    Account.remove({}, err => {
      done();
    });
  });
});

describe("/GET Account", () => {
  it("Should get all accounts", done => {
    chai
      .request(server)
      .get("/api/accounts")
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.type.should.equal("application/json");
        res.body[0].should.include.keys(
          "id",
          "name",
          "balance",
          "createdAt",
          "updatedAt"
        );
        done();
      });
  });
  it("Should get an specific", done => {
    chai
      .request(server)
      .get("/api/accounts/1")
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.type.should.equal("application/json");
        done();
      });
  });
});

describe("/POST an Account", () => {
  it("Should NOT POST an account without a name", done => {
    let account = {
      balance: 2000
    };
    chai
      .request(server)
      .post("/api/accounts")
      .send(account)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
        res.body.errors[0].should.have
          .property("message")
          .eql("Account.name cannot be null");
        done();
      });
  });
  it("Should POST an account", done => {
    let account = {
      name: "test account",
      balance: 100
    };
    chai
      .request(server)
      .post("/api/accounts")
      .send(account)
      .end((err, res) => {
        res.should.have.status(201);
        expect(res.body).to.be.a("object");
        done();
      });
  });
});
