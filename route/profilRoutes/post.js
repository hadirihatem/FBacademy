var profilecontroller = require("../../controllers/profile.controller");
const authmiddleware = require("../../helpers/midllware");
const check = require ('../../helpers/checkRole')

const initializePutRoutes = (app) => {
  app.post("/profile", [  profilecontroller.insert]);
}

  module.exports = initializePutRoutes;