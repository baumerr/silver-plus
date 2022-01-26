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
        age: Number
        previousOccupation: String
        gender: String
        hobbies: [String]
        aboutMe: String
        location: String
    }
`;

module.exports = typeDefs;





// type Auth {
//     token: ID
//     user: UserSignup
// }

// type Query {
//     users: [UserSignup]
//     details: [Detail]
// }

// type Mutation {
//     addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
//     addDetail(nickName: String, age: Number, previousOccupation: String, gender: String, hobbies: [String], aboutMe: String, location: String): UserSignup
//     login(email: String!, password: String!): Auth
// }