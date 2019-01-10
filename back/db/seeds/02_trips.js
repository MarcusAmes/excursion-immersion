
exports.seed = function(knex, Promise) {
  return knex('trips').del()
    .then(function () {
      return knex('trips').insert([
        {
          user_id: 1,
          name: "Viva Las Vegas",
          destination: "Las Vegas, NV",
          budget: 2500,
          img_url: "https://images.unsplash.com/photo-1446669052213-5dcff53f1f3f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjUwMDk2fQ"
        },
        {
          user_id: 1,
          name: "Wedding",
          destination: "New York, NY",
          budget: 800,
          img_url: "https://images.unsplash.com/photo-1521330376889-088f238e793b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjUwMDk2fQ"
        },
        {
          user_id: 1,
          name: "Business trip",
          destination: "San Francisco, CA",
          budget: 500,
          img_url: "https://images.unsplash.com/photo-1423347673683-ccdb7f6a948f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjUwMDk2fQ"
        }
      ]);
    });
};
