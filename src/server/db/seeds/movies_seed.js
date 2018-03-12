exports.seed = (knex, Promise) =>
  // Deletes ALL existing entries
  knex("movies")
    .del()
    .then(() =>
      knex("movies").insert({
        name: "The Land Before Time",
        genre: "Fantasy",
        rating: 7,
        explicit: false
      })
    )
    .then(() =>
      knex("movies").insert({
        name: "Jurassic Park",
        genre: "Science Fiction",
        rating: 9,
        explicit: true
      })
    )
    .then(() =>
      knex("movies").insert({
        name: "Ice Age",
        genre: "Action/Comedy",
        rating: 5,
        explicit: false
      })
    );
