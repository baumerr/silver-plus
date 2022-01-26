const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type UserSignup {
        _id: ID
        firstName: String
        lastName: String
        email: String
        details: [String]
    }
    
    type Query {
        users: [UserSignup]
    }
`;

module.exports = typeDefs;