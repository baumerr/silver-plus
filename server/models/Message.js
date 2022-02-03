const { Schema, model } = require("mongoose");
var moment = require("moment");
var constansts = require("./constants");

const messageSchema = new Schema({
  senderid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  chainid: {
    type: Schema.Types.ObjectId,
    ref: "MessageChain",
  },
  content: {
    type: String,
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

const Messaage = model("Messaage", messageSchema);

module.exports = Messaage;
