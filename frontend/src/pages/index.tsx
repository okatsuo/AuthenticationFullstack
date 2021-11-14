import gql from 'graphql-tag'
import type { NextPage } from 'next'
import { Dashboard } from '../components/dashboard'
import { UserLogin } from '../components/login'
import { client } from '../graphql/client'
import { DashboardTemplate } from '../template/dashboard-template'

const Home: NextPage = () => {
  return <DashboardTemplate />

}

export default Home
