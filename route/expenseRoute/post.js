var expensecontroller = require("../../controllers/expense.controller");
const authmiddleware = require("../../helpers/midllware");
const check = require ('../../helpers/checkRole')

const initializePutRoutes = (app) => {
  app.post("/expense", [authmiddleware, expensecontroller.insert]);
}

  module.exports = initializePutRoutes;