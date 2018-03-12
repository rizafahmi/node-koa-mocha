const Router = require("koa-router");
const queries = require("../db/queries/movies");

const router = new Router();
const BASE_URL = `/api/v1/movies`;

router.get(BASE_URL, async function(ctx) {
  try {
    const movies = await queries.getAllMovies();
    ctx.body = {
      status: "OK",
      data: movies
    };
  } catch (err) {
    console.error(err);
  }
});

router.get(`${BASE_URL}/:id`, async function(ctx) {
  try {
    const movie = await queries.getMovie(ctx.params.id);
    if (movie.length > 0) {
      ctx.body = {
        status: "OK",
        data: movie
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: "KO",
        message: "That movie does not exist."
      };
    }
  } catch (err) {
    console.error(err);
  }
});

router.post(`${BASE_URL}`, async function(ctx) {
  try {
    const movie = await queries.addMovie(ctx.request.body);
    if (movie.length > 0) {
      ctx.status = 201;
      ctx.body = {
        status: "OK",
        data: movie
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: "KO",
        message: "Something went wrong."
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: "KO",
      message: err.message || "Sorry, an error has occured."
    };
  }
});

router.put(`${BASE_URL}/:id`, async function(ctx) {
  try {
    const movie = await queries.updateMovie(ctx.params.id, ctx.request.body);
    if (movie.length > 0) {
      ctx.status = 200;
      ctx.body = {
        status: "OK",
        data: movie
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: "KO",
        message: "That movie does not exist."
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: "KO",
      message: err.message || "Sorry, an error has occured."
    };
  }
});

router.delete(`${BASE_URL}/:id`, async function(ctx) {
  try {
    const movie = await queries.deleteMovie(ctx.params.id);
    if (movie.length > 0) {
      ctx.status = 200;
      ctx.body = {
        status: "OK",
        data: movie
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: "KO",
        message: "That movie does not exist."
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: "KO",
      message: err.message || "Sorry, error has occured."
    };
  }
});

module.exports = router;
