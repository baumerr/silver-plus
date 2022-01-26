const { UserSignup, Detail } = require("../models");
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (context.user) {
        const user = await UserSignup.find()
      }
    },
  },
};

module.exports = resolvers;