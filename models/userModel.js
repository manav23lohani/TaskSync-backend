const mongoose = require("mongoose");
const { isEmail } = require("validator");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter an username"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      validate: [isEmail, "Please enter a  valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required field"],
      minlength: [6, "Minimum password length is 6 characters"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);