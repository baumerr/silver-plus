const { UserSignup } = require("../models");
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (context.user) {
        const user = await UserSignup.find()
        return user;
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
    }
  }
};

module.exports = resolvers;