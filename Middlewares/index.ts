
import authJwt = require("./authJwt");
import userController = require("../Controllers/userController");


export default   {
  authJwt,
  verifySignUp: userController.default.checkDuplicateUsernameOrEmail
};