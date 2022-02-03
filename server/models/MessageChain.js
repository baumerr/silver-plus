const { Schema, model } = require("mongoose");
var moment = require("moment");
var constansts = require("./constants");

const messageChainSchema = new Schema({
  creatorid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  receiverid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  postid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (time) => moment(time).format(constansts.TIME_FORMAT),
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    get: (time) => moment(time).format(constansts.TIME_FORMAT),
  },
});

const MessageChain = model("MessageChain", messageChainSchema);

module.exports = MessageChain;
