require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "jsonwebtoken-secret";
let isAuth = async (req, res, next) => {
  let code = 401,
    response = {};
  const access =
    req.headers["x-access-token"] ||
    req.headers["authorization"] ||
    req.query.token ||
    req.body.token;
  try {
    if (!access) {
      code = 403;
      throw new Error("Unauthorized!");
    }
    const user = await jwt.verify(access, secret);

    req.user = user;

    next();
  } catch (error) {
    response.code = code || 401;
    response.message = error.message || "Unauthorized!";
    response.internal_message = error.message || "Unauthorized!";

    return res.status(response.code).json(response);
  }
};

let isAuthSocket = async (token) => {
  try {
    return await jwt.verify(token, secret);
  } catch (error) {
    return false;
  }
};

module.exports = {
  isAuth,
  isAuthSocket,
};
