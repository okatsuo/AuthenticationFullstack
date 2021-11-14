import gql from 'graphql-tag'
import { createContext, useState } from 'react'
import { client } from '../../graphql/client'
import { USER_LOGIN } from '../../graphql/queries'
import { User } from '../../graphql/types/user'

type AuthContext = {
  signIn: (email: string, password: string) => void
  loggedUser: User | null
}

type AuthProvider = {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContext>({} as AuthContext)

export const AuthProvider = ({ children }: AuthProvider) => {

  const [loggedUser, setLoggedUser] = useState<User | null>({} as User)

  const signIn = async (email: string, password: string) => {
    const { data: { login }, error, loading } = await client.query<{ login: { token: String, user: User } }>({
      query: USER_LOGIN,
      variables: {
        email, password
      }
    })
    setLoggedUser(login.user)
  }

  return <AuthContext.Provider value={{ signIn, loggedUser }}>{children}</AuthContext.Provider>
}