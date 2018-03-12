const Koa = require("koa");
const indexRoutes = require("./routes/index");
const movieRoutes = require("./routes/movies");

const app = new Koa();
const PORT = 1337;

app.use(indexRoutes.routes());
app.use(movieRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = server;
