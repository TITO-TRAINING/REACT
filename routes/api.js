const express = require("express");
const router = express.Router();

const userApiController = require("../controllers/user.controller");
const generalMiddleware = require("../middlewares/general.middleware"),
  authMiddleware = require("../middlewares/jwt.middleware"),
  userMiddleware = require("../middlewares/user.middleware");
let initAPIs = (app) => {
  router.use([
    generalMiddleware.formatJsonApi,
    generalMiddleware.setAllowOrigin,
  ]);
  router.post(
    "/register",
    [userMiddleware.REGISTER],
    userApiController.register,
  );
  router.post("/login", [userMiddleware.LOGIN], userApiController.login);
  router.use([authMiddleware.isAuth]);
  router.get("/users", userApiController.getUser);

  return app.use("/api", router);
};
module.exports = initAPIs;
