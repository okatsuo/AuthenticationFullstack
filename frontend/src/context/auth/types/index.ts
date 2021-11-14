import { User } from '../../../graphql/types/user'

export type AuthContextInterface = {
  signIn: (email: string, password: string) => void
  signOut: () => void
  verifyLoggedUser: () => boolean
  loggedUser: User | null
}

export type AuthProviderInterface = {
  children: React.ReactNode
}
