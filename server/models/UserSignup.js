const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please input an email address."],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  details: [
    {
      type: Schema.Types.ObjectId,
      ref: "Details",
    },
  ],
});

// two models: one signup and then one description (+about me char 280)

const User = mongoose.model("User", userSchema);

module.exports = User;
