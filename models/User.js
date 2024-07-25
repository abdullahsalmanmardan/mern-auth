const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    trim: true,
    maxLength: [50, "Name can not be more than 50 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 8 characters long"],
  }
});

module.exports = mongoose.model("User", UserSchema);
