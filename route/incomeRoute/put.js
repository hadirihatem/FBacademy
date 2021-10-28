var incomecontroller = require("../../controllers/income.controller");
const authmiddleware = require("../../helpers/midllware");
const check = require ('../../helpers/checkRole')

const initializePutRoutes = (app) => {
  app.put("/income/:incomeId", [ authmiddleware, incomecontroller.update]);
}

  module.exports = initializePutRoutes;