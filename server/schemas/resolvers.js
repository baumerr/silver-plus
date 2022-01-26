const { UserSignup } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return UserSignup.find();
    },
  },
};

module.exports = resolvers;