const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const detailSchema = require('./Details');

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
  details: [detailSchema],
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const UserSignup = mongoose.model("User", userSchema);

module.exports = UserSignup;
