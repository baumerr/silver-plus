const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: String
    username: String
    email: String
    password: String
    type: String
    gender: String
    age: Int
    hobbies: [String]
  }

  type Auth {
    token: String
    user: User
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

  input CreateUserInput {
    username: String
    email: String
    password: String
    type: String
    gender: String
    age: Int
    hobbies: [String]
  }

  type Query {
    me(id: String, username: String): User
    messageChain(id: String): MessageChain
    message(id: String): Message
  }

  type Mutation {
    login(email: String, password: String): Auth
    addUser(input: CreateUserInput): Auth
    addMessageChain(
      creatorid: String
      receiverid: String
      postid: String
    ): MessageChain
    addMessage(senderid: String, chainid: String, content: String): Message
  }
`;

module.exports = typeDefs;
