const mongoose = require('mongoose');

const { Schema } = mongoose;

const detailSchema = new Schema({
    nickName: {
        type: String
    },
    age: {
        type: Number
    },
    previousOccupation: {
        type: String
    },
    gender: {
        type: String
    },
    hobbies: [
        {
            type: String
        }
    ],
    aboutMe: {
        type: String,
        maxlength: 280
    },
    location: {
        type: String
    }
});

module.exports = detailSchema;