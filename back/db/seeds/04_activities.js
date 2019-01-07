
exports.seed = function(knex, Promise) {
  return knex('activities').del()
    .then(function () {
      return knex('activities').insert([
        {
          trip_id: 1,
          title: "Flight out",
          type: "flight",
          start: 'January 17, 2019 03:25:00',
          end: 'January 17, 2019 03:25:00'      
        }
      ]);
    });
};
