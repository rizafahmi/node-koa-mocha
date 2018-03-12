exports.up = knex =>
  knex.schema.createTable("movies", table => {
    table.increments();
    table
      .string("name")
      .notNullable()
      .unique();
    table.string("genre").notNullable();
    table.string("rating").notNullable();
    table.boolean("explicit").notNullable();
  });

exports.down = knex => knex.schema.dropTable("movies");
