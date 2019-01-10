const knex = require("../db/knex.js");

module.exports = {
  all: (req, res) => {
    knex('trip_notes')
      .where("trip_id", req.params.id)
      .then(users => res.json(users))
  },
  add: (req, res) => {
    knex('trip_notes')
      .insert(req.body, '*')
      .then(newTripNote => res.json(newTripNote[0]))
  },
  remove: (req, res) => {
    knex('trip_notes')
      .where('id', req.params.id)
      .del('*')
      .then(deletedActivity => res.json(deletedActivity[0]))
  }
}