const knex = require("../db/knex.js");

module.exports = {
  all: (req, res) => {
    knex('activities')
      .where("trip_id", req.params.id)
      .then(users => res.json(users))
  },
  add: (req, res) => {
    knex('activities')
      .insert(req.body, '*')
      .then(newActivity => res.json(newActivity[0]))
  },
  remove: (req, res) => {
    knex('activities')
      .where('id', req.params.id)
      .del('*')
      .then(deletedActivity => res.json(deletedActivity[0]))
  }
}