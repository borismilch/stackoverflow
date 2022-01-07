import {gql} from '@apollo/client'

export const CHECK_USER = gql `
  mutation Mutation($user: UserInput) {
    checkUser(user: $user) {
      email
      username
      createdAt
      id
      picture
      bio
      reputation
      location
    }
}
`


export const UPDATE_USER = gql `
mutation Mutation($user: UserInput) {
  updateUser(user: $user) {
    email
    createdAt
    username
    picture
    id
    reputation
    bio
    location
  }
}
`