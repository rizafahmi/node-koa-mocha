const Koa = require("koa");

const app = new Koa();
const PORT = 1337;

app.use(async ctx => {
  ctx.body = {
    status: "OK",
    message: "Hello, KOA!"
  };
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = server;
