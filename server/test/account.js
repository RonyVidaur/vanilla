process.env.NODE_ENV = "test";
const Account = require("../models/account");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app");
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);
let testAccountId;

// describe("accounts", () => {
//   beforeEach(done => {
//     Account.destroy({}, err => {
//       done();
//     });
//   });
// });

// describe("/POST an Account", () => {
//   it("Should NOT POST an account without a name", done => {
//     let account = {
//       balance: 2000
//     };
//     chai
//       .request(server)
//       .post("/api/accounts")
//       .send(account)
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.a("object");
//         res.body.errors[0].should.have
//           .property("message")
//           .eql("Account.name cannot be null");
//         done();
//       });
//   });

//   it("Should POST an account if all data is valid", done => {
//     let account = {
//       name: "test account",
//       balance: 100
//     };
//     chai
//       .request(server)
//       .post("/api/accounts")
//       .send(account)
//       .end((err, res) => {
//         should.not.exist(err);
//         res.should.have.status(201);
//         expect(res.body).to.be.a("object");
//         testAccountId = res.body.id;
//         done();
//       });
//   });
// });

describe("/GET", () => {
  it("Should get welcome message on root endpoint", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property("message").eql("Welcome to Vanilla API");
        done();
      });
  });

  it("Should not get authorize access to the API if no user is found in request", done => {
    chai
      .request(server)
      .get("/api/user/account")
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(400);
        res.type.should.equal("application/json");
        res.body.should.have.property("message").eql("Unauthorized Request");
        done();
      });
  });
  // it("Should get an specific account", done => {
  //   chai
  //     .request(server)
  //     .get(`/api/accounts/${testAccountId}`)
  //     .end((err, res) => {
  //       should.not.exist(err);
  //       res.should.have.status(200);
  //       res.type.should.equal("application/json");
  //       done();
  //     });
  // });
  // it("Should return error on unexistent account", done => {
  //   chai
  //     .request(server)
  //     .get("/api/accounts/21312")
  //     .end((err, res) => {
  //       res.should.have.status(404);
  //       res.body.should.be.a("object");
  //       expect(res.body).be.eql({ message: "Account not found" });
  //       done();
  //     });
});
// });

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
