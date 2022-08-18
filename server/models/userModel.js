const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter the name"],
    unique: true,
  },
  contact: Number,
  address: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
