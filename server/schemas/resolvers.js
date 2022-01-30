const MessageChain = require("../models/MessageChain");
const Message = require("../models/Message");
const User = require("../models/User");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context, info) => {
      const { id, username } = args;
      const user = await User.findOne({
        $or: [{ _id: id }, { username: username }],
      });

      if (!user) {
        return null;
      }

      const token = signToken(user);

      return {
        _id: user._id,
        username: user.username,
        email: user.email,
        password: user.password,
        type: user.type,
        gender: user.gender,
        age: user.age,
      };
    },
    messageChain: async (parent, args, context, info) => {
      const { id } = args;
      return await MessageChain.findOne({ _id: id });
    },
    message: async (parent, args, context, info) => {
      const { id } = args;
      return await Message.findOne({ _id: id });
    },
  },
  Mutation: {
    login: async (parent, args, context, info) => {
      const { email, password } = args;

      const user = await User.findOne({ email: email });

      if (!user) {
        return null;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        return null;
      } else {
        const token = signToken(user);

        return {
          user: {
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
          },
          token,
        };
      }
    },
    addUser: async (parent, args, context, info) => {
      const { username, email, password, type, gender, age } = args.input;

      const user = await User.create({
        username,
        email,
        password,
        type,
        gender,
        age,
      });

      const token = signToken(user);
      return {
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
          password: user.password,
          type: user.type,
          gender: user.gender,
          age: user.age,
        },
        token,
      };
    },
    addMessageChain: async (parent, args, context, info) => {
      const { creatorid, receiverid, postid } = args;
      const messageChain = await MessageChain.create({
        creatorid,
        receiverid,
        postid,
      });

      return messageChain;
    },
    addMessage: async (parent, args, context, info) => {
      const { senderid, chainid, content } = args;
      const message = await Message.create({
        senderid,
        chainid,
        content,
      });

      return message;
    },
  },
};

module.exports = resolvers;
