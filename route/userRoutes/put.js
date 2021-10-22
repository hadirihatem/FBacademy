var userscontroller = require("../../controllers/user.controller");
const authmiddleware = require("../../helpers/midllware");
const check = require ('../../helpers/checkRole')

const initializePutRoutes = (app) => {
  app.put("/users/:userId", [ authmiddleware ,userscontroller.update]);
}

  module.exports = initializePutRoutes;