const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
var constansts = require("./constants");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    validate: {
      validator: function (v) {
        return constansts.USER_TYPES.includes(v);
      },
      message: "Invalid user type",
    },
  },
  gender: {
    type: String,
    validate: {
      validator: function (v) {
        return constansts.USER_GENDERS.includes(v);
      },
      message: "Invalid user gender",
    },
  },
  age: {
    type: Number,
    min: 18,
  },
  hobbies: [String],
});

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
