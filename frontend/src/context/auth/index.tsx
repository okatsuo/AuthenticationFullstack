import { useRouter } from 'next/dist/client/router'
import { createContext, useState } from 'react'
import { client } from '../../graphql/client'
import { USER_LOGIN } from '../../graphql/queries'
import { User } from '../../graphql/types/user'
import { AppRouters } from '../../utils/enums/appRouters'
import { LocalStorage } from '../../utils/enums/localStorage'
import { AuthContextInterface, AuthProviderInterface } from './types'

export const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface)

export const AuthProvider = ({ children }: AuthProviderInterface) => {
  const router = useRouter()
  const [loggedUser, setLoggedUser] = useState<User | null>(null)

  const signIn = async (email: string, password: string) => {
    const { data: { login }, error, loading } = await client.query<{ login: { token: string, user: User } }>({
      query: USER_LOGIN,
      variables: {
        email, password
      }
    })
    setLoggedUser(login.user)
    localStorage.setItem(LocalStorage.user_token, login.token)
    router.push(AppRouters.home)
  }

  const signOut = () => {
    setLoggedUser(null)
    localStorage.removeItem(LocalStorage.user_token)
  }

  return <AuthContext.Provider value={{ signIn, signOut, loggedUser }}>{children}</AuthContext.Provider>
}