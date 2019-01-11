
exports.seed = function(knex, Promise) {
  return knex('activities').del()
    .then(function () {
      return knex('activities').insert([
        {
          trip_id: 1,
          name: "Flight to Vegas",
          type: "flight",
          start: '2019-01-14T10:40:00-07:00',
          end: '2019-01-14T11:40:00-07:00',
          address: '3400 E Sky Harbor Blvd, Phoenix, AZ 85034',
          price: 130
        },
        {
          trip_id: 1,
          name: "MGM Check In",
          type: "hotel",
          start: '2019-01-14T14:00:00-07:00',
          address: '3799 S Las Vegas Blvd, Las Vegas, NV 89109',
          price: 550
        },
        {
          trip_id: 1,
          name: "Dinner with friends",
          type: "custom",
          start: '2019-01-15T18:30:00-07:00',
          end: '2019-01-15T19:45:00-07:00',
          address: '707 E Carson Ave, Las Vegas, NV 89101',
          price: 80
        },
        {
          trip_id: 1,
          name: "Night out",
          type: "custom",
          start: '2019-01-15T20:00:00-07:00',
          end: '2019-01-16T01:30:00-07:00',
          address: '707 E Carson Ave, Las Vegas, NV 89101',
          price: 500
        },
        {
          trip_id: 1,
          name: "MGM Check Out",
          type: "hotel",
          start: '2019-01-16T11:00:00-07:00',
          address: '3799 S Las Vegas Blvd, Las Vegas, NV 89109',
          price: 0
        },    
        {
          trip_id: 1,
          name: "Flight back",
          type: "flight",
          start: '2019-01-16T12:30:00-07:00',
          end: '2019-01-16T13:30:00-07:00',
          address: '5757 Wayne Newton Blvd, Las Vegas, NV 89119',
          price: 120
        },
        {
          trip_id: 2,
          name: "Flight out",
          type: "flight",
          start: '2019-01-20T08:40:00-07:00',
          end: '2019-01-20T09:40:00-07:00',
          price: 120
        },
        {
          trip_id: 2,
          name: "Wedding",
          type: "custom",
          start: '2019-01-21T11:30:00-07:00',
          end: '2019-01-21T12:45:00-07:00',
          price: 80
        },
        {
          trip_id: 2,
          name: "Flight back",
          type: "flight",
          start: '2019-01-23T06:30:00-07:00',
          end: '2019-01-23T07:30:00-07:00',
          price: 120
        },
        {
          trip_id: 3,
          name: "Flight out",
          type: "flight",
          start: '2019-01-20T08:40:00-07:00',
          end: '2019-01-20T09:40:00-07:00',
          price: 120
        },
        {
          trip_id: 3,
          name: "Meeting with bob",
          type: "business",
          start: '2019-01-21T11:30:00-07:00',
          end: '2019-01-21T12:45:00-07:00',
          price: 80
        },
        {
          trip_id: 3,
          name: "Flight back",
          type: "flight",
          start: '2019-01-23T06:30:00-07:00',
          end: '2019-01-23T07:30:00-07:00',
          price: 120
        },
      ]);
    });
};
