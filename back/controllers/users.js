const knex = require("../db/knex.js");
const hasher = require("../config/hasher.js");

module.exports = {

  all: (req, res) => {
    knex('users')
    .then(users => res.json(users))
  },
  one: (req, res) => {
    knex('users')
    .where("id", req.params.id)
    .then(user => res.json(user[0]))
  },
  login: (req, res) => {
    knex('users')
    .where('email', req.body.email)
    .then((results) => {
      if (results.length >= 1) {
        let user = results[0]
        hasher.check(user, req.body)
        .then((matches) => {
          if (matches) {
            res.json(user)
          } else {
            res.sendStatus(401)
          }
        })
      } else {
        res.sendStatus(401)
      }
    })
  },
  register: (req, res) => {
    knex('users')
      .where('email', req.body.email)
      .then(users => {
        if(!users.length) {
          hasher.hash(req.body).then((user) => {
            knex('users')
              .insert({
                email: user.email,
                password: user.password
              }, '*')
              .then((result) => {
                res.json(result[0])
              })
          })
        } else {
          res.sendStatus(401)
        }
      })
  }
}