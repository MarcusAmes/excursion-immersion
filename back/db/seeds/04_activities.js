
exports.seed = function(knex, Promise) {
  return knex('activities').del()
    .then(function () {
      return knex('activities').insert([
        {
          trip_id: 1,
          title: "Flight out",
          type: "flight",
          start: 'January 17, 2019, 03:25:00'    
        },
        {
          trip_id: 1,
          title: "Meeting with bob",
          type: "business",
          start: 'January 19, 2019, 03:25:00'
        },
        {
          trip_id: 1,
          title: "Flight back",
          type: "flight",
          start: 'January 22, 2019, 03:25:00'
        },
      ]);
    });
};
