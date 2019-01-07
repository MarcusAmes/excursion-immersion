
exports.seed = function(knex, Promise) {
  return knex('activity_notes').del()
    .then(function () {
      return knex('activity_notes').insert([
        {activity_id: 1, note: "Gate: B16"}
      ]);
    });
};
