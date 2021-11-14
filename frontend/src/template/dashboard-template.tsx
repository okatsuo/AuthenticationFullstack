import { useContext } from 'react'
import { Dashboard } from '../components/dashboard'
import { UserLogin } from '../components/login'
import { AuthContext } from '../context/auth'

export const DashboardTemplate = () => {
  const { verifyLoggedUser } = useContext(AuthContext)
  return verifyLoggedUser() ? <Dashboard /> : <UserLogin />
}