import { useRouter } from 'next/dist/client/router'
import { createContext, useEffect, useState } from 'react'
import { client } from '../../graphql/client'
import { USER_LOGIN } from '../../graphql/queries'
import { USER_AUTHENTICATION } from '../../graphql/queries/user-authentication'
import { User } from '../../graphql/types/user'
import { AppRouters } from '../../utils/enums/appRouters'
import { AppCookies } from '../../utils/enums/localStorage'
import { AuthContextInterface, AuthProviderInterface } from './types'
import Cookie from 'js-cookie'

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
    Cookie.set(AppCookies.user_token, login.token)
    router.push(AppRouters.home)
  }

  const signOut = () => {
    setLoggedUser(null)
    Cookie.remove(AppCookies.user_token)
    router.push(AppRouters.home)
  }

  const verifyLoggedUser = (): boolean => {
    return !!Cookie.get(AppCookies.user_token)
  }

  useEffect(() => {
    const token = Cookie.get(AppCookies.user_token)
    console.log('entrou no effect');
    if (token !== null) {
      console.log('o user tá undefined');
      client.query<{ authenticateUser: User }>({
        query: USER_AUTHENTICATION,
        variables: { token }
      }).then(({ data: { authenticateUser } }) => {
        setLoggedUser(authenticateUser)
      }).catch((err) => {
        signOut()
      })
    }
  }, [])

  return <AuthContext.Provider
    value={{
      signIn,
      signOut,
      verifyLoggedUser,
      loggedUser
    }}
  >
    {children}
  </AuthContext.Provider>
}