const knex = require("../connection");

const getAllMovies = () => knex("movies").select("*");
const getMovie = id =>
  knex("movies")
    .select("*")
    .where({ id: parseInt(id, 0) });

const addMovie = movie =>
  knex("movies")
    .insert(movie)
    .returning("*");

const updateMovie = (id, movie) =>
  knex("movies")
    .update(movie)
    .where({ id: parseInt(id, 0) })
    .returning("*");

module.exports = {
  getAllMovies,
  getMovie,
  addMovie,
  updateMovie
};
