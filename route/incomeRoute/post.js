var incomecontroller = require("../../controllers/income.controller");
const authmiddleware = require("../../helpers/midllware");
const check = require ('../../helpers/checkRole')

const initializePutRoutes = (app) => {
  app.post("/income", [  incomecontroller.insert]);
}

  module.exports = initializePutRoutes;