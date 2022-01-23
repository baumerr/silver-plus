const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

// firstName, lastName, age

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please input an email address.']
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    age: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    athletic: {
        type: Boolean,
        required: true
    },
    hobbies: [
        {
            type: String,
            trim: true
        }
    ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;