import gql from 'graphql-tag'
import type { NextPage } from 'next'
import { Dashboard } from '../components/dashboard'
import { UserLogin } from '../components/login'
import { client } from '../graphql/client'

const Home: NextPage = () => {
  // client.query({
  //   query: gql`
  //   query Users {
  //     getUsers {
  //       id
  //       name
  //       email
  //       created_at
  //       updated_at
  //     }
  //   }
  //   `
  // }).then((data) => {
  //   console.log('data')
  //   console.log(data)
  // })
  return (
    // <Dashboard />
    <UserLogin />
  )
}

export default Home
