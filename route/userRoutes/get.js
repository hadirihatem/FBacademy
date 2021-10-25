const authmiddleware = require("../../helpers/midllware");
const usercontrollers = require("../../controllers/user.controller");
const check = require("../../helpers/checkRole");

const initgetRoutes = (app) => {
  app.get("/user/:userId", [authmiddleware, usercontrollers.getbyId]);
  app.get("/users", [authmiddleware,usercontrollers.list]);
};
module.exports = initgetRoutes;
