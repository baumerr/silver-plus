const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type UserSignup {
        _id: ID
        firstName: String
        lastName: String
        email: String
        details: [Detail]
    }
    type Detail {
        _id: ID
        nickName: String
        age: String
        previousOccupation: String
        gender: String
        hobbies: [String]
        aboutMe: String
        location: String
    }

    type Auth {
        token: ID
        user: UserSignup
    }

    type Query {
        me: UserSignup
        users: [UserSignup]
        user: UserSignup
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addDetail(nickName: String, age: String, previousOccupation: String, gender: String, details: [String], aboutMe: String, location: String): UserSignup
        login(email: String!, password: String!): Auth
        updateDetail(nickName: String, age: String, previousOccupation: String, gender: String, details: [String], aboutMe: String, location: String): UserSignup
    }
`;

module.exports = typeDefs;