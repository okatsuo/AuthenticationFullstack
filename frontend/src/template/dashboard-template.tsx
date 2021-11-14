import { useContext } from 'react'
import { Dashboard } from '../components/dashboard'
import { UserLogin } from '../components/login'
import { AuthContext } from '../context/auth'

export const DashboardTemplate = () => {
  const { loggedUser } = useContext(AuthContext)
  return loggedUser ? <Dashboard /> : <UserLogin />
}