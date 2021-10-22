const authmiddleware = require("../../helpers/midllware");
const usercontrollers = require("../../controllers/user.controller");
const check = require("../../helpers/checkRole");

const initgetRoutes = (app) => {
  app.get("/user/:userId", [authmiddleware, usercontrollers.getuser]);
  app.get("/users", [
    authmiddleware,
    (req, res) => {
      if (!check.authRole(req, res, ("admin"))) return;
      res.send("admin page");
    },
    usercontrollers.list,
  ]);
};
module.exports = initgetRoutes;
