const authmiddleware = require("../../helpers/midllware");

const incomecontrollers = require("../../controllers/income.controller");

const initgetRoutes = (app) => {
  app.get("/income/:incomeId", [incomecontrollers.getincome]);
};
module.exports = initgetRoutes;