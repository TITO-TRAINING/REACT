const User = require("../models/user.model"),
  authHelper = require("../helpers/auth.helper");

module.exports.register = async (req, res) => {
  let code = 500,
    response = {};
  try {
    const { username, email, password } = req.body;
    const isExist = await User.findOne({ email });
    if (isExist) {
      code = 409;
      throw new Error("Email already exist!");
    }
    const user = await new User({ username, email, password }).save();
    response.code = 200;
    response.data = user.toResources();
    response.message = "Successfully!";

    return res.status(response.code).json(response);
  } catch (error) {
    let err = { error: "error", message: error.message };
    response.code = code || 500;
    response.message = error.message;
    response.internal_message = error.message;
    response.errors = [err];

    return res.status(response.code).json(response);
  }
};

module.exports.login = async (req, res) => {
  let code = 500,
    response = {};
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      code = 401;
      throw new Error("Email or password incorrect!");
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      code = 401;
      throw new Error("Email or password incorrect!");
    }
    const strJWT = await authHelper.hashTokenAccess(user.toResources());

    response.code = 200;
    response.data = { ...user.toResources(), token: strJWT };
    response.message = "Login successfully!";

    return res.status(response.code).json(response);
  } catch (error) {
    let err = { error: "error", message: error.message };
    response.code = code || 500;
    response.message = error.message;
    response.internal_message = error.message;
    response.errors = [err];

    return res.status(response.code).json(response);
  }
};

module.exports.getUser = async (req, res) => {
  let response = {},
    code = 500;
  try {
    const { user } = req;
    response.code = 200;
    response.data = user;
    return res.status(response.code).json(response);
  } catch (error) {
    let err = { error: "error", message: error.message };
    response.code = code || 500;
    response.message = error.message;
    response.internal_message = error.message;
    response.errors = [err];
    return res.status(response.code).json(response);
  }
};
