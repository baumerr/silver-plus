import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
    me {
      _id
      firstName
      lastName
      email
      details {
        _id
        nickName
        age
        gender
        hobbies
        location
        aboutMe
        previousOccupation
      }
    }
  }
`;

export const QUERY_USER = gql`
query user ($_id: String!) {
    user (_id: $_id) {
      _id
      firstName
      lastName
      email
      details {
        _id
        nickName
        age
        previousOccupation
        gender
        hobbies
        aboutMe
        location
      }
    }
  }
`;

export const QUERY_USERS = gql`
query users {
    users {
      _id
      firstName
      lastName
      email
      details {
        _id
        nickName
        age
        previousOccupation
        gender
        hobbies
        aboutMe
        location
      }
    }
  }
`;

export const QUERY_MESSAGES = gql`
query messages($email: String) {
    messages(email: $email) {
        _id
        senderid
        chainid
        content
        createdAt
        updatedAt
    }

}`