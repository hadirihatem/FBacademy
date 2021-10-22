const authmiddleware = require("../../helpers/midllware");

const profilecontrollers = require("../../controllers/profile.controller");

const initgetRoutes = (app) => {
  app.get("/profile/:profileId", [profilecontrollers.getprofile]);
};
module.exports = initgetRoutes;