const Koa = require("koa");
const router = require("./routes");

const app = new Koa();
const PORT = 1337;

app.use(router.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = server;
