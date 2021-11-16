import { AuthChecker } from 'type-graphql'

export const authChecker: AuthChecker<{authorization: string}> = (
  { context: { authorization } },
  roles: string[]): boolean => {
  console.log(authorization)
  console.log(roles)
  return true
}
