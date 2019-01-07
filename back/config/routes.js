//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js")
module.exports = function(app){

  //LOGIN
    app.get('/users', users.all);
    app.get('/users/:id', users.one);
    app.get('/users/login', users.login)
  
  //Register
    app.post('/users/register', users.register)
}
