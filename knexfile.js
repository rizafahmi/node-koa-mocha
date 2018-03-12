const path = require("path");

const BASE_PATH = path.join(__dirname, "src", "server", "db");

module.exports = {
  test: {
    client: "pg",
    connection: "postgres://riza:@localhost:5432/koa_api_test",
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(BASE_PATH, "migrations")
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds")
    }
  },
  development: {
    client: "pg",
    connection: "postgres://riza:@localhost:5432/koa_api",
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(BASE_PATH, "migrations")
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds")
    }
  }
};
