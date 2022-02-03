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
    
    type MessageChain {
    _id: String
    creatorid: String
    receiverid: String
    postid: String
    createdAt: String
    updatedAt: String
  }
  
  type Message {
    _id: String
    senderid: String
    chainid: String
    content: String
    createdAt: String
    updatedAt: String
  }

    type Query {
        me: UserSignup
        users: [UserSignup]
        user(_id: String!): UserSignup
        messageChain(id: String): MessageChain
    message(id: String): Message
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addDetail(nickName: String, age: String, previousOccupation: String, gender: String, hobbies: [String], aboutMe: String, location: String): UserSignup
        login(email: String!, password: String!): Auth
        updateDetail(nickName: String, age: String, previousOccupation: String, gender: String, hobbies: [String], aboutMe: String, location: String): UserSignup
        deleteUser(_id: String!): UserSignup
        addMessageChain(
      creatorid: String
      receiverid: String
      postid: String
    ): MessageChain
    addMessage(senderid: String, chainid: String, content: String): Message
    }
`;

module.exports = typeDefs;
