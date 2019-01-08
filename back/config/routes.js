const users = require("../controllers/users.js")
const trips = require("../controllers/trips.js")
const activities = require("../controllers/activities.js")

module.exports = function(app){

  //LOGIN
    app.get('/users', users.all);
    app.get('/users/:id', users.one);
    app.post('/users/login', users.login)
  
  //REGISTER
    app.post('/users/register', users.register)

  //TRIPS
    app.get('/trips/:id', trips.all)
    app.post('/trips/add', trips.add)
    app.delete('/trips/remove/:id', trips.remove)

  //ACTIVITIES
    app.get('/activities/:id', activities.all)
    app.post('/activities/add', activities.add)
}
