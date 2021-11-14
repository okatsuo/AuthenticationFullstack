import gql from 'graphql-tag';

export const USER_LOGIN = gql`
query Login($email: String!, $password: String!){
  login(email: $email, password: $password){
    token
    user {
      id
      name
      email
      created_at
      updated_at
    }
  }
}
`