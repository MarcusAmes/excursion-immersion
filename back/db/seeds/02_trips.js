
exports.seed = function(knex, Promise) {
  return knex('trips').del()
    .then(function () {
      return knex('trips').insert([
        {user_id: 1, title: "Viva Las Vegas", destination: "Las Vegas, NV", budget: 1000},
        {user_id: 2, title: "Wedding", destination: "New York, NY", budget: 800},
        {user_id: 3, title: "Business trip", destination: "San Francisco, CA", budget: 500}
      ]);
    });
};
