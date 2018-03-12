const Router = require("koa-router");

const router = new Router();

router.get("/", async function(ctx) {
  ctx.body = {
    status: "OK",
    message: "Hello, KOA!"
  };
});

module.exports = router;
