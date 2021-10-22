const authmiddleware = require("../../helpers/midllware");

const stockcontrollers = require("../../controllers/stock.controller");

const initgetRoutes = (app) => {
  app.get("/stock/:stockId", [stockcontrollers.getstock]);
};
module.exports = initgetRoutes;