const knex = require("../connection");

const getAllMovies = () => knex("movies").select("*");
const getMovie = id =>
  knex("movies")
    .select("*")
    .where({ id: parseInt(id, 0) });

module.exports = {
  getAllMovies,
  getMovie
};
