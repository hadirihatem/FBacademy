var expensecontroller = require("../../controllers/expense.controller");
const authmiddleware = require("../../helpers/midllware");
const check = require ('../../helpers/checkRole')

const initializePutRoutes = (app) => {
  app.put("/expense/:expenseId", [ authmiddleware,check(["admin"]), expensecontroller.update]);
}

  module.exports = initializePutRoutes;