var stockcontroller = require("../../controllers/stock.controller");
const authmiddleware = require("../../helpers/midllware");
const check = require ('../../helpers/checkRole')

const initializePutRoutes = (app) => {
  app.put("/stock/:stockId", [ authmiddleware,check(["admin"]), stockcontroller.update]);
}

  module.exports = initializePutRoutes;