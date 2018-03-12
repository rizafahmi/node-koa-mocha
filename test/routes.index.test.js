process.env.NODE_ENV = "test";

const chai = require("chai");
const should = chai.should();
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../src/server/index");
const knex = require("../src/server/db/connection");

describe("route: index", () => {
  describe("GET /", () => {
    it("should return json", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.eql(200);
          res.type.should.eql("application/json");
          res.body.status.should.equal("OK");
          res.body.message.should.eql("Hello, KOA!");
          done();
        });
    });
  });
});

describe("routes: movies", () => {
  beforeEach(() => {
    return knex.migrate
      .rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run());
  });
  afterEach(() => knex.migrate.rollback());
  describe("GET /api/v1/movies", () => {
    it("should return all movies", done => {
      chai
        .request(server)
        .get("/api/v1/movies")
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal("application/json");
          res.body.status.should.eql("OK");
          res.body.data.length.should.eql(3);
          res.body.data[0].should.include.keys(
            "id",
            "name",
            "genre",
            "rating",
            "explicit"
          );
          done();
        });
    });
  });

  describe("GET /api/v1/movies/:id", () => {
    it("should respond with a single movie object", done => {
      chai
        .request(server)
        .get("/api/v1/movies/1")
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal("application/json");
          res.body.status.should.eql("OK");
          res.body.data[0].should.include.keys(
            "id",
            "name",
            "genre",
            "rating",
            "explicit"
          );
          res.body.data.length.should.eql(1);
          done();
        });
    });
    it("should return error if movie does not exist", done => {
      chai
        .request(server)
        .get("/api/v1/movies/99999")
        .end((err, res) => {
          should.exist(err);
          res.status.should.equal(404);
          res.type.should.equal("application/json");
          res.body.status.should.eql("KO");
          res.body.message.should.eql("That movie does not exist.");
        });
      done();
    });
  });
});
