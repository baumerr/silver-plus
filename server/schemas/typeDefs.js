const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        firstName: String
    }
    
    type Query {
        users: [User]
    }
`;

module.exports = typeDefs;