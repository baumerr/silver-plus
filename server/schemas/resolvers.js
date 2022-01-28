const { UserSignup } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const User = require("../models/UserSignup");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if(context.user) {
        const userData = await UserSignup.findOne({ _id: context.user._id})
          .select('-__v -password')
          .populate('details');

        return userData;
      }
    },
    user: async (parent, { _id }, context) => {
      if(context.user) {
        const userData = await UserSignup.findById(_id)
          .select('-__v -password')
          .populate('details');

        return userData;
      }
      throw new AuthenticationError('You must be logged in to view this profile!');
    },
    users: async (parent, args, context) => {
      if (context.user) {
        const users = await UserSignup.find()
          .select('__v -password');

        return users;
      }
      throw new AuthenticationError("You must be logged in to view profiles!");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await UserSignup.create(args);
      const token = signToken(user);

      return { token, user }
    },
    login: async (parent, { email, password }) => {
      const user = await UserSignup.findOne({ email });

      if(!user) {
        throw new AuthenticationError('Wrong email / password');
      }

      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw) {
        throw new AuthenticationError('Wrong email / password');
      }

      const token = signToken(user);

      return { token, user };
    },
    addDetail: async (parent, args, context) => {
      if(context.user) {
        const details = await UserSignup.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { details: args } },
          { new: true, runValidators }
        );

        return details;
      }
      throw new AuthenticationError('You must be logged in to add your details!');
    },
    updateDetail: async (parent, args, context) => {
      if(context.user) {
        const details = await UserSignup.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { details: args } },
          { new: true, runValidators }
        );

        return details;
      }
      throw new AuthenticationError('You must be logged in to update your details!');
    }
  }
};

module.exports = resolvers;