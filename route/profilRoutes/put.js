var profilecontroller = require("../../controllers/profile.controller");
const authmiddleware = require("../../helpers/midllware");
const check = require ('../../helpers/checkRole')

const initializePutRoutes = (app) => {
  app.put("/profile/:profileId", [ authmiddleware, profilecontroller.update]);
}

  module.exports = initializePutRoutes;