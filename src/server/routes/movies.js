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

module.exports = router;
