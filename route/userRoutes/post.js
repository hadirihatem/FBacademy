const { body, validationResult } = require("express-validator");
const { validat } = require("../../helpers/validat");
const usercontrollers = require("../../controllers/user.controller");
// refister user
const initpostroutes = (app) => {
  app.post("/user/register", [
    body("Fname").isAlpha(),
    body("Lname").isAlpha(),
    body("email").isEmail(),
    body("phone").isNumeric(),
    body("age").isNumeric(),
    body("password").isLength({ min: 8 }),
    validat,
    usercontrollers.insert,
  ]);
app.post('/user/login',[
  body("email").isEmail().notEmpty(),
  body("password").isLength({ min: 8 }).notEmpty(),
  validat ,usercontrollers.login])


};

module.exports = initpostroutes;
