const knex = require("../db/knex.js");

module.exports = {
  all: (req, res) => {
    knex('trips')
      .where("user_id", req.params.id)
      .then(users => res.json(users))
  },
  add: (req, res) => {
    knex('trips')
      .insert(req.body, '*')
      .then(newTrip => res.json(newTrip[0]))
  },
  remove: (req, res) => {
    knex('trips')
      .where('id', req.params.id)
      .del('*')
    .then(deletedTrip => {res.json(deletedTrip[0])})
  }
}