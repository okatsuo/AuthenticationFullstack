import { useRouter } from 'next/dist/client/router'
import { createContext, useState } from 'react'
import { client } from '../../graphql/client'
import { USER_LOGIN } from '../../graphql/queries'
import { User } from '../../graphql/types/user'
import { AppRouters } from '../../utils/enums/appRouters'
import { LocalStorage } from '../../utils/enums/localStorage'

type AuthContext = {
  signIn: (email: string, password: string) => void
  loggedUser: User | null
}

type AuthProvider = {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContext>({} as AuthContext)

export const AuthProvider = ({ children }: AuthProvider) => {
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

  return <AuthContext.Provider value={{ signIn, loggedUser }}>{children}</AuthContext.Provider>
}