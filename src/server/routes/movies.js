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

module.exports = router;
