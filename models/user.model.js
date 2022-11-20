const bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 12,
  mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 3000,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      minlength: 1,
      maxlength: 500,
    },
    password: {
      type: String,
      required: true,
      maxlength: 100000,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.methods.comparePassword = function (_password) {
  return bcrypt.compareSync(_password, this.password);
};

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});
UserSchema.methods.toResources = function () {
  return {
    _id: this._id,
    username: this.username,
    email: this.email,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};
module.exports = mongoose.model("Users", UserSchema);
