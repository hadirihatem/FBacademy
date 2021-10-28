var stockcontroller = require("../../controllers/stock.controller");
const authmiddleware = require("../../helpers/midllware");
const check = require ('../../helpers/checkRole')

const initializePutRoutes = (app) => {
  app.post("/expense", [ stockcontroller.insert]);
}

  module.exports = initializePutRoutes;