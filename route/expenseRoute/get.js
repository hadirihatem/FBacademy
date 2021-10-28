const authmiddleware = require("../../helpers/midllware");

const expensecontrollers = require("../../controllers/expense.controller");

const initgetRoutes = (app) => {
  app.get("/expense/:expenseId", [expensecontrollers.getexpense]);
  app.get("/expenses",[expensecontrollers.list])
};
module.exports = initgetRoutes;