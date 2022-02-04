import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $password: String!, $email: String!) {
    addUser(firstName: $firstName, lastName: $lastName, password: $password, email: $email) {
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;

export const ADD_DETAIL = gql`
mutation addDetail($nickName: String, $age: String, $previousOccupation: String, $gender: String, $hobbies: [String], $aboutMe: String, $location: String) {
    addDetail(nickName: $nickName, age: $age, previousOccupation: $previousOccupation, gender: $gender, hobbies: $hobbies, aboutMe: $aboutMe, location: $location) {
      _id
      firstName
      lastName
      email
      details {
        _id
        nickName
        age
        previousOccupation
        aboutMe
        location
        hobbies
        gender
      }
    }
  }
`;

export const DELETE_USER = gql`
mutation deleteUser ($_id: String!,) {
    deleteUser(_id: $_id) {
      _id  
    }
  }
`;