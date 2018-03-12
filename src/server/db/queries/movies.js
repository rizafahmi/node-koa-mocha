const knex = require("../connection");

const getAllMovies = () => knex("movies").select("*");

module.exports = {
  getAllMovies
};
