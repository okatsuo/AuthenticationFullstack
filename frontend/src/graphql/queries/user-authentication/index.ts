import gql from 'graphql-tag';

export const USER_AUTHENTICATION = gql`
query Authentication($token: String!){
  authenticateUser(token: $token){
    id
    name
    email
    created_at
    updated_at
  }
}
`