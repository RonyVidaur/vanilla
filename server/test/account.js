process.env.NODE_ENV = "test";
const Account = require("../models/account");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app");
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);
const cookie =
  "session=eyJwYXNzcG9ydCI6eyJ1c2VyIjoyfX0=; session.sig=Tkh_D1ddYnhGroHsi87N4jU2le4";

describe("/POST an Account", () => {
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

  // it("Should POST an account if all data is valid", done => {
  //   let account = {
  //     name: "test account",
  //     balance: 100
  //   };
  //   chai
  //     .request(server)
  //     .post("/api/accounts")
  //     .send(account)
  //     .end((err, res) => {
  //       should.not.exist(err);
  //       res.should.have.status(201);
  //       expect(res.body).to.be.a("object");
  //       testAccountId = res.body.id;
  //       done();
  //     });
  // });
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
      .set(
        "Cookie",
        "session=eyJwYXNzcG9ydCI6eyJ1c2VyIjoyfX0=; session.sig=Tkh_D1ddYnhGroHsi87N4jU2le4"
      )
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
      .set(
        "Cookie",
        "session=eyJwYXNzcG9ydCI6eyJ1c2VyIjoyfX0=; session.sig=Tkh_D1ddYnhGroHsi87N4jU2le4"
      )
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

// describe("/PUT update an account", () => {
//   it("Should update an account", done => {
//     let changes = {
//       balance: 8000
//     };
//     chai
//       .request(server)
//       .put(`/api/accounts/${testAccountId}`)
//       .send(changes)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.balance.should.equal(changes.balance);
//         done();
//       });
//   });
//   it("Should NOT UPDATE a non existent account", done => {
//     let changes = {
//       name: "New Account"
//     };
//     chai
//       .request(server)
//       .put("/api/accounts/9087")
//       .send(changes)
//       .end((err, res) => {
//         res.should.have.status(404);
//         res.body.should.be.a("object");
//         res.body.should.have.property("message").eql("Account not found");
//         done();
//       });
//   });
// });

// describe("/DELETE an account", () => {
//   it("Should delete an account", done => {
//     chai
//       .request(server)
//       .delete(`/api/accounts/${testAccountId}`)
//       .end((err, res) => {
//         res.should.have.status(204);
//         res.body.should.be.a("object");
//         done();
//       });
//   });
//   it("should return an error when deleting a non existent account", done => {
//     chai
//       .request(server)
//       .delete("/api/accounts/12345567")
//       .end((err, res) => {
//         res.should.have.status(404);
//         res.body.should.have.property("message").eql("Account Not Found");
//         done();
//       });
//   });
// });
