
exports.seed = function(knex, Promise) {
  return knex('activities').del()
    .then(function () {
      return knex('activities').insert([
        {
          trip_id: 1,
          name: "Flight out",
          type: "flight",
          start: '2019-01-20T08:40:00-07:00',
          end: '2019-01-20T09:40:00-07:00',
          price: 120
        },
        {
          trip_id: 1,
          name: "Meeting with bob",
          type: "business",
          start: '2019-01-21T11:30:00-07:00',
          end: '2019-01-21T12:45:00-07:00',
          price: 80
        },
        {
          trip_id: 1,
          name: "Flight back",
          type: "flight",
          start: '2019-01-23T06:30:00-07:00',
          end: '2019-01-23T07:30:00-07:00',
          price: 120
        },
      ]);
    });
};
