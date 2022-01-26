const mongoose = require('mongoose');

const { Schema } = mongoose;

const detailSchema = new Schema({
    nickName = {
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
    hobbies: {
        type: [String]
    }
});

const Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;