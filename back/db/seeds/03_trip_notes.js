
exports.seed = function(knex, Promise) {
  return knex('trip_notes').del()
    .then(function () {
      return knex('trip_notes').insert([
        {trip_id: 1, note: "$500 gambling limit"},
        {trip_id: 1, note: "Call mom"},
        {trip_id: 3, note: "Call Josh about presentation"},
      ]);
    });
};
