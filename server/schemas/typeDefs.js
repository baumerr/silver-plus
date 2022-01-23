const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        age: Number
        location: String
        athletic: Boolean
        hobbies: [String]
    }
    
    type Query {
        users: [User]
    }
`;

module.exports = typeDefs;