const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    zipCode: {type: String},
    phone: {type: Number},
  },
  {timestamps: true}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
