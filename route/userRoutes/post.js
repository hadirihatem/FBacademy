const { body, validationResult } = require("express-validator");
const { validat } = require("../../helpers/validat");
const usercontrollers = require("../../controllers/user.controller");
// refister user
const initpostroutes = (app) => {
  app.post("/user/register", [
    body("Fname", "firstname must be alpha").isAlpha(),
    body("Lname","lastname must be alpha").isAlpha(),
    body("email", "invalid email").isEmail(),
    body("phone", "phone must be numeric").isNumeric(),
    body("age" , "age must be numeric").isNumeric(),
    body("password","minimum length allowed is 6 character").isLength({ min: 6}),
    validat,
    usercontrollers.insert,
  ]);
app.post('/user/login',[
  body("email").isEmail().notEmpty(),
  body("password").isLength({ min: 8 }).notEmpty(),
  validat ,usercontrollers.login])


};

module.exports = initpostroutes;
